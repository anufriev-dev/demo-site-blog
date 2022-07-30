import Layout from "../../../components/other/layout/Layout.jsx"

/* fake data
   -------------------------------------------------- */
import Blog from "../../../components/other/blog/Blog.jsx"


export default function BlogPage({ post }) {


  const data = post.data.filter(it => it.post_id == post.id )

  if(!post) return <h1>Loading... </h1>

  return (
    <Layout>
      <Blog data={data} comments={post.comments} />
    </Layout>
  )
}

export async function getServerSideProps ({ params }) {

  let data = await fetch(`${process.env.URL_HERE}/api/getUser`)
  data = await data.json()
  let comments = await fetch(`${process.env.URL_HERE}/api/getComments/${params.id}`)
  comments = await comments.json()

  return {
    props: {
      post: {
        id: params.id,
        data,
        comments
      },
    }
  }
}