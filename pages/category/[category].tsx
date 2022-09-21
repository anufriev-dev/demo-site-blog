import { Layout } from "../../components"
import Router from "next/router"

export default function Category({ post }) {

  return (
    <Layout>
        Category = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export function getServerSideProps (context) {

  const { query } = context

  return {
    props: {
      post: { id: query.category }
    }
  }
}