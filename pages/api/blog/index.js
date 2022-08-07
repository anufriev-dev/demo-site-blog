import db from "../../../config/db"


export default async function Blog (req,res) {
  const METHOD = req.method

  if(METHOD === "GET") {
    try{
      const result = await db.query(
        `
        SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
          COUNT(pbc.comment_id) AS comments
          FROM post_blog AS pb
          LEFT JOIN post_blog_comment AS pbc
        ON pb.post_id = pbc.post_id GROUP BY pb.post_id
        `)
      res.status(200).json(result.rows)
    }catch(e) {
      res.status(400).send(`Server ${e.stack}`)
    }
  }
}