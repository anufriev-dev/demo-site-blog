import { error } from "src/utils"
import { Comment } from "../../../model"
import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"


export default async function DeleteComment (req: NextApiRequest,res: NextApiResponse) {
  const METHOD = req.method

  if(METHOD === "DELETE") {
    const { id }  = req.body
    try {
      const token = await getToken({ req })
      if(!token) return error("access denied")

      const result = await Comment.deleteComment(id)
      if(result <= 0) error("Error deleteComment")
      res.status(200).json({})
    } catch(e) {
      res.status(400).json({})
    }
  }
}
