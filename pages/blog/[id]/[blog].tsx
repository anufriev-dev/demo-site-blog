import { Layout, Blog } from "../../../components"
import { useRouter } from "next/router.js"
import { useState } from "react"

/* fake data
   -------------------------------------------------- */
import { Posts } from "../../../model"
import { GetServerSideProps } from "next"

export interface blogPageProps {
  data: object,
  comments: object[]
}

export default function BlogPage(props: blogPageProps) {
  
  // const [comments,setComments] = useState(props.comment)

  if(!props) return null
  return (
    <Layout>
    <Blog 
      {...props}
    />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  try{
    const comments = await Posts.getComments(+query.id)
    const post = await Posts.getPost(+query.id)
  
    return { props: { data: post, comments } }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере")
    return { props: { data: null } } 
  }
}