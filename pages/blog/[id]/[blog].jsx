import Layout from "../../../components/other/layout/Layout.jsx"
import { useRouter } from "next/router.js"
import { useState } from "react"

/* fake data
   -------------------------------------------------- */
import Blog from "../../../components/other/blog/Blog.jsx"
import db from "../../../config/db.js"


export default function BlogPage({ data, comment }) {
  
  const routher = useRouter()
  const [comments,setComments] = useState(comment)

  const { id } = routher.query

  if(!data) return <h1>Loading... </h1>
  if(!comments) return <h1>Loading... </h1>

  return (
    <Layout>
      <Blog 
        data={data[0]} 
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
    console.log("Error")
    return {props: {data: null} } 
  }
}