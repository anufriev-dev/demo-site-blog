import { useState } from "react"
import { createDate, isValid } from "../../utils"
import { addComment } from "../../http/blogApi.js"


function useBlog(props) {

  const { post_id,comments,setComments } = props

  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")

  const [isErrorAuthor, setErrorAuthor] = useState(false)
  const [isErrorText, setErrorText] = useState(false)
  const [errSubmit, setErrorSubmit] = useState(false)

  const dropState = () => {
    setAuthor("")
    setText("")
  }

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

    dropState()
  }

  return { 
    author, text, isErrorAuthor, isErrorText, errSubmit,
    setAuthor, setText, submit
  }
}

export default useBlog