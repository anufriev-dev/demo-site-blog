import { Layout } from "../../../components"
import { useRouter } from "next/router.js"
import { useState } from "react"

/* fake data
   -------------------------------------------------- */
import Blog from "../../../components/other/blog"
import db from "../../../config/db.js"


export default function BlogPage(props) {
  
  const routher = useRouter()
  const [comments,setComments] = useState(props.comment)

  const { id } = routher.query

  if(!props || !comments) return null

  return (
    <Layout>
    <Blog 
      data={props.data[0]} 
      comments={comments} 
      setComments={setComments}
      post_id={id} 
    />
    </Layout>
  )
}

export async function getServerSideProps({ query })  {

  try{
    const comments = await db.query(
    `
      SELECT * FROM comment
      JOIN post_blog_comment
      ON comment.comment_id = post_blog_comment.comment_id
      WHERE post_id = $1
    `
    ,[query.id])
    const post = await db.query(
      `
        SELECT * FROM post_blog
        WHERE post_id = $1
      `
      ,[query.id]
    )
  
  return {
    props: {
      data: post.rows ,
      comment: comments.rows
    }
  }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере")
    return {props: {data: null} } 
  }
}