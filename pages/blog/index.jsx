import { useEffect, useState } from "react"
import Layout from "../../components/other/layout/Layout"
import MainBlog from "../../components/other/mainBlog/MainBlog"
import db from "../../config/db"


export default function IndexBlog({ data }) {


  if(!data) return <h1>Loading</h1>

  return (
    <Layout>
      <MainBlog post={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  try{
    const result = await db.query(
      `
      SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
        COUNT(pbc.comment_id) AS comments
        FROM post_blog AS pb
        LEFT JOIN post_blog_comment AS pbc
      ON pb.post_id = pbc.post_id GROUP BY pb.post_id
      `)
    return {
      props: {
        data: result.rows
      }
    }
  }catch(e) {
    console.error("Сервак лежит")
  }
}