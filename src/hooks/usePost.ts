import { MouseEvent,useEffect, useState } from "react"
import { createDate, isValid } from "src/utils"
import { BlogApi } from "../http"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"



function usePost(comments_params: object[]) {
  const router = useRouter()
  const { id: post_id } = router.query

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
    const dataFetch = { post_id: +post_id, author, text, date }

    BlogApi.addComment(dataFetch).then(() => {
      setComments([...comments, dataFetch])
      setErrorSubmit(false)
    },() =>  setErrorSubmit(true))

    setText("")
  }

  const formProps = {
    setAuthor, author, setText, text,
    submit, buttonTitle: "Отправить",isErrorAuthor ,
    isErrorText,
  }

  return {
    errSubmit, comments, formProps
  }
}

export default usePost
