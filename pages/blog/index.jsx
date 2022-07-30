import Layout from "../../components/other/layout/Layout"
import MainBlog from "../../components/other/mainBlog/MainBlog"


export default function IndexBlog({ data }) {

  return (
    <Layout>
      <MainBlog post={data} />
    </Layout>
  )
}

// export async function getStaticPaths () {
  
//   const result = await fetch(`${process.env.URL_HERE}`)


//   return {
//     paths,
//     falback: false
//   }
// }

export async function getStaticProps () {
  let data = await fetch(`${process.env.URL_HERE}/api/getUser`)
  data = await data.json()

  return {
    props: {
      data
    }
  }
}