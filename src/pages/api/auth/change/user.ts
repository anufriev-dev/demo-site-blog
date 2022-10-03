import { RegExpEmail } from "config"
import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { isValid } from "src/utils"
import { User as UserModele } from "../../../../model"

function error () {
  throw new Error("validation error")
}

const User = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "PUT") {
    try {
      const token = await getToken({ req })
      if(!token) throw new Error("access denied")

      const { id, name, email, role } = req.body

      if(!isValid(name, { min: 2, regexp: /\D/ig })) {
        error()
      }
      if(!isValid(email, { regexp: RegExpEmail })) {
        error()
      }
      if(!isValid(role, { regexp: /^[12]$/ })) {
        error()
      }

      const result = await UserModele.update(id, name, email, role)

      if(!result) error()

      return res.status(200).send("OK")
    } catch(e) {
      return res.status(400).json({ message: e.message })
    }
  }
}

export default User
