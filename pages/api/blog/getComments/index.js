import db from "../../../../config/db"
import isValid from "../../../../utils/isValid"

export default async function getCommentsIndex (req,res) {
  const METHOD = req.method

  
  if(METHOD === "POST") {
    const { author, text, date, post_id } = req.body

    try {
      // валидация
      if(!date) throw new Error("date is not defined")
      const regexp = /[а-ёa-z]/i
      if(!isValid(author,{ min: 2, regexp }) || !isValid(text,{ min: 6 })) {
        throw new Error("Form not valid")
      }
      // выбираю только тот пост, к которому хочу добавить комментарий
      const post = await db.query(
        "SELECT * FROM post_blog WHERE post_id = $1"
        ,[post_id]
      )
      // если поста не нахожу, ошибка
      if(!post.rows.length) throw new Error("post_id is not valid")
      // добавляем комментарий в 2 запроса
      const result = await db.query(
      `
        INSERT INTO comment (author,text,date)
        VALUES ('${author}','${text}','${date}');
        INSERT INTO post_blog_comment (post_id)
        VALUES ('${post_id}')
      `)
    
      res.status(200).json(`INSERT: ${result.length}`)
    }catch(e) {
      res.status(400).json(e.message)
    }
  }

  if(METHOD === "GET") {
  // Logic ...
  }

}