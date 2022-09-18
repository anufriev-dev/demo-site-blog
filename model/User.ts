import db from "../config/db"
import { defineRole } from "../utils"

type Role = "USER" | "ADMIN"


class User {
  async create (email: string, name: string, role: Role) {
    try {
      await db.query(`
          INSERT INTO "user" (email, name, role)
          VALUES ($1, $2, $3)
      `,[email, name, defineRole(role)])
      
    } catch(e) { return e }
  }

  async exist (email: string) {
    try {
      const data = await db.query(`
          SELECT * FROM "user" as "us"
          WHERE us.email = $1
      `,[email])
      return data?.rows[0]?.email
       ? true
       : false
    } catch { return false }
  }
}

export default new User