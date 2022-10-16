
import formidable from "formidable"
import fs from "fs"
import { Posts } from "src/model";
import { createDate, error, isValid } from "src/utils";

export const config = {
  api: {
    bodyParser: false
  }
}

const put = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    const { post_id, category, summary, text, img_name } = fields

    if(
      !isValid(category,{ min: 2 }) ||
      !isValid(summary,{ min: 2 }) ||
      !isValid(text,{ min: 10 })

    ) {
      return res.status(400)
    }
    let isSave
    let result
    if(img_name) {
      result = await Posts.updatePost(post_id, category, summary, text, img_name)
    }else {
      isSave = await saveFile(files.img)
      if(!isSave) error("Error")
      result = await Posts.updatePost(post_id, category, summary, text, files.img.name)
    }
    // const result = await Posts.create(category, summary, text, files.src_img.name )
    if(+result <= 0) error("Error")

    return res.status(201).send("")
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path)
  fs.writeFileSync(`./public/${process.env["NEXT_PUBLIC_UPLOAD"]}/${file.name}`, data)
  await fs.unlinkSync(file.path)
  return true
}

const Update = (req, res) => {
  put(req, res)
}


export default Update
