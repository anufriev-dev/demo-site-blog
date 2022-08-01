import db from "../../../../config/db"
import isValid from "../../../../utils/isValid"

export default async function getCommentsIndex (req,res) {
  return new Promise(() => {
    
    const METHOD = req.method
    if(METHOD === "POST") {
    return new Promise(resolved => {
        const { author, text, date, post_id } = req.body

        if(!isValid(author,{ min: 2, regexp: /[а-ёa-z]/i } || !isValid(text,{ min: 6 })) ) {
          return res.status(400).json({ message: "Form not valid" })
        }
    
        db.query("INSERT INTO comment (author,text,date) VALUES ($1,$2,$3)",
        [author,text,date],
        (err) => {
          if(err) {
            return res.status(400).json( { message: "Faild"} )
          }
          resolved(post_id)
        })
      })
      .then((post_id) => {
        db.query("INSERT INTO post_blog_comment (post_id) VALUES ($1);",[post_id],
        (err,response) => {
          if(err) {
            return res.status(400).json( { message: "Faild"} )
           }
          return res.status(200).json(response)
        })
      })
    }
    if(METHOD === "GET") {
       // Logic ...
    }
  })
}