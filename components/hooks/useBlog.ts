import { MouseEvent,useEffect, useState } from "react"
import { createDate, isValid } from "../../utils"
import { addComment } from "../../http/blogApi"
import { useSession } from "next-auth/react"



function useBlog(post_id, comments_params) {

  const [comments, setComments] = useState<object[]>(comments_params)
  const { data: session } = useSession()

  const [author,setAuthor] = useState<string>("")
  const [text, setText] = useState<string>("")

  const [isErrorAuthor, setErrorAuthor] = useState<boolean>(false)
  const [isErrorText, setErrorText] = useState<boolean>(false)
  const [errSubmit, setErrorSubmit] = useState<boolean>(false)

  useEffect(() => {
    session && setAuthor(session.user.name)
  },[session])

  const dropState = () => {
    setText("")
  }

  const submit = async (e: MouseEvent<HTMLElement> ) => {
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
    setAuthor, setText, submit, comments
  }
}

export default useBlog