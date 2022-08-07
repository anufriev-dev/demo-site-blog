import Router from "next/router"
import { useEffect, useState } from "react"
/* lib components
   -------------------------------------------------- */
import { Container } from "@mui/system"
/* Api    
   -------------------------------------------------- */
import { addComment, getAllComments } from "../../../http/blogApi.js"
/* Utils   
   -------------------------------------------------- */
import createDate from "../../../utils/createDate.js"
/* components     
   -------------------------------------------------- */
import Post from "../../ui/Post"
import Comment from "../../ui/Comment"
import FormData from "../../ui/FormData"
/* styles
   -------------------------------------------------- */
import postStyles from "./styles/post.module.scss"
import commentStyles from "./styles/comment.module.scss"
import formDataStyles from "./styles/formData.module.scss"
import indexStyles from "./styles/index.module.scss"
import isValid from "../../../utils/isValid.js"


export default function Blog({ data, post_id, comments, setComments }) {

  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")

  const [isErrorAuthor, setErrorAuthor] = useState(false)
  const [isErrorText, setErrorText] = useState(false)


  const submit = async (e) => {
    e.preventDefault()
    // валидация формы
    if(!isValid(author,{ min: 2, regexp: /[а-ёa-z]/i })){
      setErrorAuthor(true)
      return
    }else  setErrorAuthor(false)

    if(!isValid(text,{ min: 6 })){
      setErrorText(true)
      return
    }else  setErrorText(false)

    // отправка формы на сервер
    setLoading(true)
    const date = createDate()
    const dataFetch = { post_id, author, text, date, }

    addComment(dataFetch)
    setComments([...comments, dataFetch])

    setAuthor(""); setText("")
    setLoading(false)
  }

  if(!data) return <h1>Loading...</h1>
  if(!comments) return <h1>Loading...</h1>

  return (
    <div>
        {/* Пост */}
      <div>
        <Container>
          <Post styles={postStyles} item={data}/>
        </Container>
      </div>

        {/* Комментарии */}
      <div>
          <Container>
            <h2 className={indexStyles.titleh2}>Комментарии</h2>
            { 
              comments.length
              ?
              comments.map((comment,index) => (
                <Comment styles={commentStyles} key={index} comment={comment} />
              ))
              :
              <div>
                <p className={indexStyles.emptyCommentP}>
                  Паника, что-то случилось!!! Ничего не найдено в комментариях. 
                  Срочно нужно что-то добавить, чтобы это место не оставалось пустым.</p>
                <hr />
              </div>
             }
          </Container>
      </div>
  
        {/* Форма */}
      <div>
        <Container>
          <h2 className={indexStyles.titleh2}>Добавить комментарий</h2>
          <FormData 
            setAuthor={setAuthor}
            setText={setText}
            text={text}
            author={author}
            submit={submit}
            buttonTitle={"Отправить"}
            styles={formDataStyles}
            isErrorAuthor={isErrorAuthor}
            isErrorText={isErrorText}
          />
        </Container>
      </div>

      <button onClick={() => Router.back()}>Go back</button>
    </div>
  )
}