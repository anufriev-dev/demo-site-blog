import db from "config/db"
import { insert, role, UserDB } from "src/types"
import { defineRole } from "src/utils"
import bcrypt from "bcrypt"


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
      return Boolean(data?.rows[0]?.email)
    } catch { return false }
  }

  async get_by_email (email: string): Promise<UserDB> {
    try {
      const data = await db.query(`
          SELECT id, email, name, role, passwd, date_registration
          FROM "user" as "us"
          WHERE us.email = $1
      `,[email])
      return await JSON.parse(JSON.stringify(data?.rows[0]))
    } catch(e) { return e  }
  }

  async delete_account (id: number) {
    try {
      const result = await db.query(`
        DELETE FROM "user" WHERE id = $1
      `,[id])

      return result.rowCount
    } catch(e) { return e }
  }

  async update_pass(pass, email) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(pass,salt)

      const result = await db.query(`
      UPDATE "user" SET passwd = $1 WHERE email = $2
      `,[hash, email])

      return result
    } catch(e) { return e }
  }

  async update_name(name, email) {
    try {
      const result = await db.query(`
      UPDATE "user" SET name = $1 WHERE email = $2
      `,[name, email])

      return result
    } catch(e) { return e }
  }

  async get() {
    try {
      const result = await db.query(`
        SELECT id, email, name, role, date_registration
        FROM "user"
      `)

      return await JSON.parse(JSON.stringify(result.rows))
    } catch(e) { return e }
  }

  async update(id, name, email, role) {
    try {
      const result = db.query(`
        UPDATE "user" SET name = $1 ,email = $2 ,role = $3
        WHERE id = $4
      `,[name, email, role, id])
      return result
    } catch(e) { return e }
  }
}

export default new User
