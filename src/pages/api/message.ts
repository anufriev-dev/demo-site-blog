import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { Message } from "src/model"
import { error, isValid } from "src/utils"


const MessageApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST") {
    const { email, message } = req.body
    try {

      const result = await Message.add(email, message)

      if(result) {
        return res.status(200).send("OK")
      } else error("Error")

    } catch(e) {
      return res.status(400).send("error")
    }
  }
  if(req.method === "DELETE") {
    try {
      const token = await getToken({ req })
      if(!token) return error("access denied")

      const { id } = req.body

      const resutl = Message.delete(id)

      if(resutl){
        return res.status(200).send("OK")
      }else {
        error("Error")
      }
    } catch(e) {
      console.log(e)
      return res.status(400).json(e.message)
    }

  }
}

export default MessageApi
