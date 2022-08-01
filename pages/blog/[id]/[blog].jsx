import Layout from "../../../components/other/layout/Layout.jsx"
import { useRouter } from "next/router.js"

/* fake data
   -------------------------------------------------- */
import Blog from "../../../components/other/blog/Blog.jsx"
import { getPosts } from "../../../http/blogApi.js"
import { useEffect, useState } from "react"


export default function BlogPage() {

  const routher = useRouter()

  const { id } = routher.query

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    getPosts().then(data => {
      const result = data.filter(post => post.post_id === id )
      setData(result)
    })
    setLoading(false)
  },[id])


  if(isLoading) return <h1>Loading... </h1>
  if(!data) return <h1>Loading... </h1>

  return (
    <Layout>
      <Blog data={data[0]} post_id={id} />
    </Layout>
  )
}
