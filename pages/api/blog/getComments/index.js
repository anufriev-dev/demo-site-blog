import db from "../../../../config/db"
import isValid from "../../../../utils/isValid"

export default async function getCommentsIndex (req,res) {
  return new Promise(() => {
    
    const METHOD = req.method

    const { author, text, date, post_id } = req.body

    if(METHOD === "POST") {
      // многие ко многим: комментарии к постам
      return new Promise((resolve,reject) => {

        // промежуточная валидация start
        const regexp = /[а-ёa-z]/i
        if(!isValid(author,{ min: 2, regexp }) || !isValid(text,{ min: 6 })) {
          reject("Form not valid")
        }
        if(!date) new Error("date is not defined")
        
        // если не находит пост, к которому нужно добавить коммент, вернуть ошибку 
        db.query("SELECT * FROM post_blog_comment WHERE post_id = $1"
        ,[post_id]
        ,(err,response) => {
          if(err || response.rows.length === 0 ) new Error("post_id is not valid")
          resolve()
        })
        // end
      })
      .then(() => {
        return new Promise((resolve,reject) => {
          db.query("INSERT INTO comment (author,text,date) VALUES ($1,$2,$3)"
          ,[author,text,date]
          ,(err) => err ? new Error(err.message) : resolve())
        })
      })
      .then(() => {
        return new Promise((resolve,reject) => {
          db.query("INSERT INTO post_blog_comment (post_id) VALUES ($1);"
          ,[post_id]
          ,(err) => err ? new Error(err.message) : resolve())
        })})
      .then(() => res.status(200).json("Комментарий добавлен!"))
      .catch(err => new Error(res.status(400).json(err)))
    }
    if(METHOD === "GET") {
       // Logic ...
    }
  })
}