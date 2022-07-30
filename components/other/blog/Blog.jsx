
import Router from "next/router"
import { useEffect } from "react"
import Post from "../../ui/Post"

export default function Blog({ data, comments }) {

  useEffect(() => {

  })


  if(!data && !comments) return <h1>Loading...</h1>

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

      <form action="">
        <input type="text" placeholder="Укажите ваше имя" />
        <input type="text" placeholder="Напишите свой комментарий здесь" />

        <button >Отправить</button>
      </form>
    </div>

        id = {data.id}
        <button onClick={() => Router.back()}>Go back</button>
    </>
  )
}