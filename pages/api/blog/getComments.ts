import { isValid } from "../../../utils"
import { Posts, Comment } from "../../../model"
import { NextApiRequest, NextApiResponse } from "next"

interface Settings {
  min: number,
  max: number,
  regexp: RegExp
}

export default async function getCommentsIndex (req: NextApiRequest,res: NextApiResponse) {
  const METHOD = req.method

  
  if(METHOD === "POST") {
    const { author, text, date, post_id } = req.body
    
    try {
      // валидация
      if(!date) throw new Error("date is not defined")
      const regexp = /[а-ёa-z]/i
      if(
        !isValid(author,<Settings>{ min: 2, regexp: regexp }) ||
        !isValid(text,<Settings>{ min: 6 })
      ) {
        throw new Error("Form not valid")
      }
      // выбираю только тот пост, к которому хочу добавить комментарий
      const post = await Posts.getPost(post_id)
      
      // если поста не нахожу, ошибка
      if(!post) throw new Error("post_id is not valid")
      // добавляем комментарий в 2 запроса
      const result = await Comment.add(author,text,date,post_id)
    
      res.status(200).json(`INSERT: ${result.length}`)
    }catch(e) {
      res.status(400).send(`Server ${e.message}`)
    }
  }

  if(METHOD === "GET") {
  // Logic ...

  }

}