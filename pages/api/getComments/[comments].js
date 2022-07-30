import db from "../../../config/db"

export default async function getCommentsIndex (req,res) {

  const { comments } = req.query
  
  return new Promise((resolved,reject) => {
    db.query("SELECT * FROM comment \
  JOIN post_blog_comment on comment.comment_id = post_blog_comment.comment_id WHERE post_id = $1"
  ,[comments], (err, response) => {
    if(err) {
     reject(res.status(400).json( { message: "Faild"} ))
    }
     resolved(res.status(200).json( response.rows ))
    })
  })
}