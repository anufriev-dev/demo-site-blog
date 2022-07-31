
import Router from "next/router"
import { useEffect, useState } from "react"
import Post from "../../ui/Post"
import { getAllComments, addComment } from "../../../http/blogApi.js"
import Comment from "../../ui/Comment"
import createDate from "../../../utils/createDate"
import FormData from "../../ui/FormData"


export default function Blog({ data }) {
  
  const [comments,setComments] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")

  const post_id = data[0].post_id
  

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

  return (
    <>
      <h1 style={{textAlign:"center"}}>Пост номер: { post_id }</h1>
      
      { 
        data.map((item,index) => (
          <Post key={index} item={item} />
        ))
      }

      {
        comments.map((comment,index) => (
          <Comment key={index} comment={comment} />
        ))
      }
  
      <FormData 
        setAuthor={setAuthor}
        setText={setText} 
        text={text}
        author={author}
        submit={submit}
        buttonTitle={"Отправить"}
      />

        
      <button onClick={() => Router.back()}>Go back</button>
    </>
  )
}