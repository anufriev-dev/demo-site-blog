import db from "../../../config/db"


export default async function Blog (req,res) {
  return new Promise(() => {

    const METHOD = req.method
    if(METHOD === "GET") {

      return new Promise((resolve,reject) => {
        db.query("SELECT post_blog.post_id,post_blog.summary,post_blog.category,post_blog.date,post_blog.text,post_blog.src_img,\
        COUNT(post_blog_comment.comment_id) AS comments FROM post_blog\
        LEFT JOIN post_blog_comment ON post_blog.post_id = post_blog_comment.post_id GROUP BY post_blog.post_id;"
        ,(err,response) => err ? reject(err.message) : resolve(response))
      })
      .then((response) => res.status(200).json(response.rows))
      .catch((err) => res.status(400).json(err))
    }
    
  })
}