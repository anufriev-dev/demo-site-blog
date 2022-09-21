import db from "../config/db"

class Comment {

  async add (author,text,date,id) {
    try {
      const data = await db.query(
        `
          INSERT INTO comment (author,text,date)
          VALUES ('${author}','${text}','${date}');
          INSERT INTO post_blog_comment (post_id)
          VALUES ('${id}')
        `)
      return data
    } catch(e) { return e }
  }
}

export default new Comment
