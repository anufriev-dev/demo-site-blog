import Router from "next/router"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
/* Api    
   -------------------------------------------------- */
import { getAllComments, addComment } from "../../../http/blogApi.js"
/* components     
   -------------------------------------------------- */
import Post from "../../ui/Post"
import Comment from "../../ui/Comment"
import createDate from "../../../utils/createDate"
import FormData from "../../ui/FormData"
/* styles
   -------------------------------------------------- */
import formDataStyles from "./styles/formData.module.scss"
import { Container } from "@mui/system"


export default function Blog({ data, post_id }) {
  
  const [comments,setComments] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")


  useEffect(() => {
    setLoading(true)

    getAllComments(post_id).then(final => {
        setComments(final)
    })
        
    setLoading(false) 
  },[post_id])


  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const date = createDate()
    const dataFetch = {
      post_id,
      author,
      text,
      date,
    }
    addComment(dataFetch).then(() => {
      getAllComments(post_id).then(final => {
        setComments(final)
      })
    })
    setAuthor("")
    setText("")

    setLoading(false)
  }


  if(isLoading) return <h1>Loading...</h1>
  if(!comments ) return <h1>Loading...</h1>
  if(!data) return <h1>Loading...</h1>

  return (
    <div>
        {/* Пост */}
      <div>
      <Container>
        { 
          data.map((item,index) => (
            <Post key={index} item={item} />
          ))
        }
      </Container>
      </div>

        {/* Комментарии */}
      <div>
        <Container>
          {
            comments.map((comment,index) => (
              <Comment key={index} comment={comment} />
            ))
          }
        </Container>
      </div>
  
        {/* Форма */}
      <div>
        <Container>
          <FormData 
            setAuthor={setAuthor}
            setText={setText} 
            text={text}
            author={author}
            submit={submit}
            buttonTitle={"Отправить"}
            styles={formDataStyles}
          />
        </Container>
      </div>

      <button onClick={() => Router.back()}>Go back</button>
    </div>
  )
}