import db from "config/db"

class Message {
  async add (email, message){
    const result = db.query(`
      INSERT INTO "message" (email, text)
      VALUES ($1,$2)
    `,[email, message])

    return result
  }

  async getAll() {
    const result = await db.query(`
      SELECT * FROM "message"
    `)
    return result.rows
  }

  async delete(id) {
    const result = await db.query(`
    DELETE FROM "message"
    WHERE id = $1
    `,[id])

    return result
  }
}

export default new Message
