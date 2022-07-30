
import Router from "next/router"
import { useEffect, useState } from "react"
import Post from "../../ui/Post"

export default function Blog({ data }) {

  const [comments,setComments] = useState(null)
  const [isLoading, setLoading] = useState(false)
  

  useEffect(() => {
    setLoading(true)
      fetch(`/api/getComments/${data[0].post_id}`)
        .then(response => response.json())
        .then(data => { 
          setComments(data)
          setLoading(false)
        })      
  },[data])


  const [author,setAuthor] = useState("")
  const [text, setText] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    const date = new Date()
    const dataFetch = {
      post_id: data[0].post_id ,
      author,
      text,
      date: date.toISOString().split("T")[0]
    }
    fetch("/api/getComments",{
      method: "POST",
      body: JSON.stringify(dataFetch)
    })
  }


  if(isLoading) return <h1>Loading...</h1>
  if(!comments ) return <h1>Loading...</h1>

  return (
    <>
    { 
      data.map((item,index) => (
        <Post key={index} item={item} />
      ))
    }

    {
      comments.map((comment,index) => (
        <div key={index}>
          <div>{comment.comment_id}</div>
          <div>{comment.text}</div>
          <div>{comment.author}</div>
          <time>{comment.date}</time>
        </div>
      ))
    }

    <div style={{padding:"50px"}}>
      <h2>Добавить комментарий</h2>

      <form id="formAddComment" action="">
        <input onChange={(e) =>setAuthor(e.target.value)} value={author} type="text" placeholder="Укажите ваше имя" />
        <input onChange={(e) =>setText(e.target.value)} value={text} type="text" placeholder="Напишите свой комментарий здесь" />

        <button onClick={(e) => submit(e)} >Отправить</button>
      </form>
    </div>

        id = {data.id}
        <button onClick={() => Router.back()}>Go back</button>
    </>
  )
}