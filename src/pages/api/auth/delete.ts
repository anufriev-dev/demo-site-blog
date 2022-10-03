import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { User } from "../../../model"

const Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "DELETE") {
    try {
      const token = await getToken({ req })
      if(!token) throw new Error("access denied")

      const { id } = req.body

      if(id) {
        const result = await User.delete_account(id)
        if(result <= 0) throw new Error("user not deleted")
        return res.status(200).json({})
      }else {
        const result = User.delete_account(+token.id_db)

        if(!result) throw new Error("user not deleted")

        res.status(200).json({})
      }
    } catch(e) {
      return res.status(400).json({ message: e.message })
    }
  }
}

export default Delete
