import db from "../config/db"

type Roles = "ADMIN" | "USER"

class Role {
  async get(email: string,name: string): Promise<Roles> {
    try {
      const data = await db.query(`
          SELECT us.id, us.email, us.name, rl.role FROM "user" as "us"
          JOIN "role" as "rl" ON rl.id = us.role
          WHERE us.email = $1
          AND us.name = $2
      `,[email, name])
      return data?.rows[0]?.role
    } catch(e) { return e }
  }
}

export default new Role