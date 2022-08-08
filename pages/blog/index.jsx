import Layout from "../../components/other/layout/Layout"
import MainBlog from "../../components/other/mainBlog/MainBlog"
import db from "../../config/db"


export default function IndexBlog({ data, currentPage, maxPages }) {

  if(!data) return <h1>Loading</h1>

  return (
    <Layout>
      <MainBlog post={data} maxPages={maxPages} currentPage={currentPage} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {

  const offset =  (10 * (page - 1))  || 0

  try{
    // получаем данные постов
    const result = await db.query(
      `
      SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
        COUNT(pbc.comment_id) AS comments
        FROM post_blog AS pb
        LEFT JOIN post_blog_comment AS pbc
      ON pb.post_id = pbc.post_id GROUP BY pb.post_id
      LIMIT 10 OFFSET $1
      `
      ,[offset])
    // получаем кол-во постов
    const posts = await db.query("SELECT COUNT(post_id) AS count FROM post_blog")
    // разбиваем ко-во постов на страницы, получаем максимальное ко-во страниц
    const maxPages = Math.round( +posts.rows[0].count / 10 )
    return {
      props: {
        data: result.rows,
        currentPage: +page,
        maxPages
      }
    }
  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере")
  }
}