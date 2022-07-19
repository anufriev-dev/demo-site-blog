import Layout from "../../../components/other/layout/Layout.jsx"
import Router from "next/router"

/* fake data
   -------------------------------------------------- */
import { dataBlog } from "../../../fake_database/index.js"


export default function Blog({ post }) {


  if(!post) return <h1>Loading... </h1>

  return (
    <Layout>
      {
        post.data.map((it,index) => (
          <div key={index}>
            <div>{it.postName}</div>
            <div>{it.category}</div>
            <div>{it.postName}</div>
            <div>{it.date}</div>
            <div>{it.src}</div>
            <div>{it.title}</div>
          </div>
        ))
      }
        id = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export function getStaticPaths () {

  const paths = dataBlog.map((post) => ({
    params: { 
      id: post.id.toString(),
      blog: post.postName,
    },
  }))

  return {
    paths,
    fallback: false 
  }
}

export function getStaticProps ({ params }) {

  const data = [dataBlog[params.id - 1]]

  return {
    props: {
      post: {
        id: params.id,
        data
      }
    }
  }
}