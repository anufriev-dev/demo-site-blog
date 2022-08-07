import { useEffect, useState } from "react"
import Layout from "../../components/other/layout/Layout"
import MainBlog from "../../components/other/mainBlog/MainBlog"
import { getPosts } from "../../http/blogApi"


export default function IndexBlog() {

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(data => setData(data))
      .catch(err => console.log(err.response.data))
    setLoading(false)
  },[])

  if(isLoading) return <h1>Loading</h1>

  return (
    <Layout>
      <MainBlog post={data} />
    </Layout>
  )
}