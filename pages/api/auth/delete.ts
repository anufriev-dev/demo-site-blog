import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { User } from "../../../model"

const Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "DELETE") {
    try {
      const token = await getToken({ req })
      
      if(!token) throw new Error("access denied")

      const result = User.delete_account(token.id_db)

      if(!result) throw new Error("user not deleted")

      res.status(200).json({ msg: "user deleted" })
    } catch(e) { 
      res.status(400).json({ msg: e })
    }
  }
}

export default Delete
