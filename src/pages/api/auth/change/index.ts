import { RegExpEmail } from "config"
import { NextApiRequest, NextApiResponse } from "next"
import { isValid } from "src/utils"
import transport from "config/email"
import { env, cwd } from "process"
import { readFile, writeFile, unlink } from "fs/promises"
import { resolve } from "path"
import jwtToken from "config/jwt"
import { User } from "src/model"


function pathFile(nameFile) {
  return resolve( cwd(), "public", "template", nameFile)
}

const Change = async (req: NextApiRequest, res: NextApiResponse) => {

  if(req.method === "PUT") {
    try {
      const { pass, email } = req.body
      const result = await User.update_pass(pass,email)

      if(result) {
        res.status(200).json({})
      }else {
        throw new Error("user is not update")
      }
    } catch(e) { 
      res.status(400).json({})
    }
    
  }
  
  if(req.method === "POST") {
    try {
      const { email } = req.body
      if(!isValid(email, { regexp: RegExpEmail })) {
        throw new Error("Email not valid")
      }
      const templatePath = pathFile("account.html")

      const template = await readFile(templatePath,{ encoding: "utf-8"})
      const pathNewFile = pathFile(email + ".html")

      // create payload
      const token = jwtToken({email})


      await writeFile(
        pathNewFile,
        template + `<p>http://localhost:3000/forgotpassword/change?token=${token}<p>`
      )
      const file = await readFile(pathNewFile,{ encoding: "utf-8" })
      
      await transport.sendMail({
        from: env["EMAIL_NODEMAILER"],
        to: email,
        subject: "Востановление пароля",
        html: file,
      })

      await unlink(pathNewFile)
      
      res.status(200).json({})
    } catch(e) { 
      res.status(400).json(e)
    }
  }
}

export default Change
