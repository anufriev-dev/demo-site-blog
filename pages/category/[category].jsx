import Layout from "../../components/other/layout/Layout.jsx"
import Router from "next/router"

export default function Category({ post }) {

  return (
    <Layout>
        Category = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export function getServerSideProps ({ query }) {

  return {
    props: {
      post: {
        id: query.category,
      }
    }
  }
}