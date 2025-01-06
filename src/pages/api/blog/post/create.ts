import formidable from "formidable"
import fs from "fs"
import path from "path"
import { Posts } from "src/model"
import { error, getDate } from "src/utils"
import { cwd } from "process"


export const config = {
  api: {
    bodyParser: false
  }
}

const post = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    try {


      const { category, summary, text } = fields

      const fileName =  Date.now() + "-" + files.img.name

      const isSave = await saveFile(files.img, fileName)

      if(!isSave) error("Error")

      const result = await Posts.create(category, summary, text, fileName )

      if(result <= 0) return error("Error")

      return res.status(201).send("")
    } catch(e) {
      return res.status(400).send("")
    }
  })
}

const saveFile = (file, fileName) => {
  const data = fs.readFileSync(file.path)
  fs.writeFileSync(path.join(cwd(), "public",`${process.env["NEXT_PUBLIC_UPLOAD"]}`,`${fileName}`), data)
  fs.unlinkSync(file.path)
  return true
}

const createPost = (req, res) => {
  post(req, res)
}


export default createPost
