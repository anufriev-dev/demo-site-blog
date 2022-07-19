import Layout from "../../components/other/layout/Layout.jsx"
import Router from "next/router"

const data = [
  {id: "1", category: "Apple", desc: "Hello there my friend1"},
  {id: "2", category: "Google", desc: "Hello there my friend2"},
  {id: "3", category: "Игры", desc: "Hello there my friend3"},
  {id: "4", category: "Железо", desc: "Hello there my friend4"},
  {id: "5", category: "Linux", desc: "Hello there my friend5"},
]


export default function Category({ post }) {

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
      category: post.category,
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
        id: params.category,
      }
    }
  }
}