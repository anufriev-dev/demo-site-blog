import  jwt from "jsonwebtoken"
import { env } from "process"

function jwtToken(payload: object) {
  const token = jwt.sign(payload, env["NEXTAUTH_SECRET"], { expiresIn: "1h" })
  return token
}

export default jwtToken
