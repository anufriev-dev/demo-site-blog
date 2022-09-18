import { Layout } from "../../../components"
import { useRouter } from "next/router.js"
import { useState } from "react"

/* fake data
   -------------------------------------------------- */
import Blog from "../../../components/other/blog"
import { Posts } from "../../../model"


export default function BlogPage(props) {
  const routher = useRouter()
  const [comments,setComments] = useState(props.comment)

  const { id } = routher.query

  if(!props || !comments) return null
  return (
    <Layout>
    <Blog 
      data={props.data} 
      comments={comments} 
      setComments={setComments}
      post_id={id}
    />
    </Layout>
  )
}

export async function getServerSideProps(context)  {
  const { query } = context

  try{
    const comments = await Posts.getComments(query.id)
    const post = await Posts.getPost(query.id)
  
    return { props: { data: post, comment: comments } }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере")
    return { props: { data: null } } 
  }
}