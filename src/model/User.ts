import db from "config/db"
import { insert, role, UserDB } from "src/types"
import { defineRole } from "src/utils"


class User {
  async create (email: string, name: string, role: role, pass?: any ): Promise<insert> {
    try {
      await db.query(`
          INSERT INTO "user" (email, name, role, passwd,date_registration)
          VALUES ($1, $2, $3, $4, NOW() )
      `,[email, name, defineRole(role), pass])

      return "INSERT"
    } catch { return "ERROR" }
  }

  async exist (email: string): Promise<boolean> {
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

  async get_for_email (email: string): Promise<UserDB> {
    try {
      const data = await db.query(`
          SELECT id, email, name, role, passwd, date_registration
          FROM "user" as "us"
          WHERE us.email = $1
      `,[email])
      return data?.rows[0]
    } catch(e) { return e  }
  }

  async delete_account (id: number) {
    try {
      const result = await db.query(`
        DELETE FROM "user" WHERE id = $1
      `,[id])
      return result
    } catch(e) { return e }
  }
}

export default new User
