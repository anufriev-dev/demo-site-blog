import db from "../../../../config/db"

export default async function getCommentsIndex (req,res) {
  const METHOD = req.method

  if(METHOD === "GET") {
    const { comments } = req.query

    try{
    const result = await db.query(
    `
      SELECT * FROM comment
      JOIN post_blog_comment
      ON comment.comment_id = post_blog_comment.comment_id
      WHERE post_id = $1
    `
    ,[comments])
    
      res.status(200).json(result.rows)
    }catch(e) {
      res.status(400).json(e.message)
    }
  }

  if(METHOD === "POST") { /* Logic... */ }

}