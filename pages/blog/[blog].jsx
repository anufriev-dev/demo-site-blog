import Layout from "../../components/other/layout/Layout.jsx"
import Router from "next/router"

const data = [
  {id: "1", postName: "Kupil_noutbuk_ot_Apple", desc: "Hello there my friend1"},
  {id: "2", postName: "Neshtiaki_ot_Apple", desc: "Hello there my friend2"},
  {id: "3", postName: "Hello3", desc: "Hello there my friend3"},
  {id: "4", postName: "Hello4", desc: "Hello there my friend4"},
  {id: "5", postName: "Hello5", desc: "Hello there my friend5"},
]


export default function Blog({ post }) {

  return (
    <Layout>
        id = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export function getStaticPaths () {

  const paths = data.map((post) => ({
    params: { 
      blog: post.postName,
    },
  }))

  return { 
    paths,
    fallback: false
  }
}

export function getStaticProps ({ params }) {

  return {
    props: {
      post: {
        id: params.blog,
      }
    }
  }
}