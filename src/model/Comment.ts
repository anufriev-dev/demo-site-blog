import db from "config/db"
import { insert } from "src/types"

class Comment {
  async add (author: string, text: string ,date: string, id: number): Promise<insert> {
    try {
      await db.query(
        `
          INSERT INTO comment (author,text,date)
          VALUES ('${author}','${text}','${date}');
          INSERT INTO post_blog_comment (post_id)
          VALUES ('${id}')
        `)
      return "INSERT"
    } catch { return "ERROR" }
  }

  async getComments () {
    try {
      const result = await db.query(`
        SELECT * FROM "comment"
      `)
      return await JSON.parse( JSON.stringify(result.rows) )
    } catch(e) { return e }
  }
}

export default new Comment
