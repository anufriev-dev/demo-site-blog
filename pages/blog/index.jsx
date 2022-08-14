import Layout from "../../components/other/layout/Layout"
import MainBlog from "../../components/other/mainBlog/MainBlog"
import db from "../../config/db"


export default function IndexBlog(props) {



  if(!props) return null

  return (
    <Layout>
      <MainBlog
        post={props.data}
        posts={props.posts}
        maxPages={props.maxPages} 
        currentPage={props.currentPage} 
      />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1, search = "" } }) {

  const offset =  (10 * (page - 1))  || 0

  try{
    // получаем данные постов
    const  result = await db.query(
      `
      SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
        COUNT(pbc.comment_id) AS comments,
        COUNT(*) OVER() AS counts
        FROM post_blog AS pb
        LEFT JOIN post_blog_comment AS pbc
      ON pb.post_id = pbc.post_id
      ${search && "WHERE pb.text ILIKE '%"+ search +"%'" + " OR pb.summary ILIKE '%"+ search +"%'"}
      GROUP BY pb.post_id
      LIMIT 10 OFFSET $1
      `
      ,[offset])

    // разбиваем ко-во постов на страницы, получаем максимальное ко-во страниц
    const allPosts = +result.rows[0]?.counts || 0 // посты не могут быть пустым массивом
    const maxPages = Math.round( allPosts / 10 ) || 1  // страниц не может быть 0
    return {
      props: {
        data: result.rows,
        currentPage: +page,
        maxPages,
        posts: allPosts
      }
    }
  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере", e)
    return { props : undefined }
  }
}
