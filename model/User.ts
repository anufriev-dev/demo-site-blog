import db from "../config/db"
import { defineRole } from "../utils"

type Role = "USER" | "ADMIN"


class User {
  async create (email: string, name: string, role: Role, pass?: any ) {
    try {
      const result = await db.query(`
          INSERT INTO "user" (email, name, role, passwd,date_registration)
          VALUES ($1, $2, $3, $4, NOW() )
      `,[email, name, defineRole(role), pass])
      return result
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

  async get_for_email (email: string) {
    try {
      const data = await db.query(`
          SELECT id, email, name, role, passwd, date_registration
          FROM "user" as "us"
          WHERE us.email = $1
      `,[email])
      return data?.rows[0]
    } catch { return false }
  }

  async check (email: string, pass: string) {
    try {
      const result = await db.query(`
        SELECT * FROM "user" 
        WHERE email = $1 AND passwd = $2
      `,[email, pass])
      return result.rows[0]

    } catch(e) { return e }
  }
  async delete_account (id: any) {
    try {
      const result = await db.query(`
        DELETE FROM "user" WHERE id = $1
      `,[id])
      return result
    } catch(e) { return e }
  }
}

export default new User
