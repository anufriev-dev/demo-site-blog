import formidable from "formidable"
import fs from "fs"
import { Posts } from "src/model";
import { createDate, error } from "src/utils";

export const config = {
  api: {
    bodyParser: false
  }
}

const post = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    const { category, summary, text } = fields
    const isSave = await saveFile(files.img)
    if(!isSave) error("Error")
    const result = await Posts.create(category, summary, text, files.img.name )
    if(+result <= 0) error("Error")

    return res.status(201).send("")
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path)
  fs.writeFileSync(`./public/uploads/${file.name}`, data)
  await fs.unlinkSync(file.path)
  return true
};

const createPost = (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("")
};


export default createPost
