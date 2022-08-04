import db from "../../../../config/db"

export default async function getCommentsIndex (req,res) {
  return new Promise((resolved,reject) => {

    const { comments } = req.query

    db.query("SELECT * FROM comment \
    JOIN post_blog_comment on comment.comment_id = post_blog_comment.comment_id WHERE post_id = $1"
    ,[comments]
    ,(err, response) => err ? reject(err) : resolved(response))
  })
  .then((response) => res.status(200).json( response.rows ))
  .catch((err) => res.status(400).json(err.message))

}