import { useState } from "react"
import Router from "next/router"
/* lib components
   -------------------------------------------------- */
import { Container } from "@mui/system"
/* Api    
   -------------------------------------------------- */
import { addComment } from "../../../http/blogApi.js"
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
import Warning from "../../ui/Warning.jsx"
import ErrorComments from "../../ui/ErrorComment.jsx"


export default function Blog({ data, post_id, comments, setComments }) {

  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")

  const [isErrorAuthor, setErrorAuthor] = useState(false)
  const [isErrorText, setErrorText] = useState(false)
  const [errSubmit, setErrorSubmit] = useState(false)


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
    const date = createDate()
    const dataFetch = { post_id, author, text, date, }

    addComment(dataFetch).then(() => {
      setComments([...comments, dataFetch])
      setErrorSubmit(false)
    },() =>  setErrorSubmit(true))

    setAuthor(""); setText("")
  }

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

            {/* Отобразить */}
            { 
              comments.length
                ? comments.map((comment,index) => (
                  <Comment styles={commentStyles} key={index} comment={comment} />
                ))
                : <Warning styles={indexStyles} />
            }
            
            {/* Ошибка отправки */}
            { errSubmit && <ErrorComments styles={indexStyles} /> }
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