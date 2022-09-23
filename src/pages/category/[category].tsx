import { Layout } from "src/components"
import Router from "next/router"
import { GetServerSideProps } from "next"

export default function Category({ post }) {

  return (
    <Layout>
        Category = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  const { query } = context

  return {
    props: { post: { id: query.category } }
  }
}