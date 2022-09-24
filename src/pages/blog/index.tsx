import { GetServerSideProps } from "next"
import { Layout, Blog } from "src/components"
import { Posts } from "src/model"
import { IBlog } from "src/types"


export default function IndexBlogPage(props: IBlog) {
  if(!props) return null
  
  return (
    <Layout>
      <Blog {...props}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const { query: { page = 1, search = "" }} = context
  
  try{
    // получаем данные постов
    const { 
      data, allPosts, maxPages
    } = await Posts.getPostJoinComments(+page, search as string)
    
    return { 
      props: { currentPage: +page, data, maxPages, allPosts }
    }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере", e)
    return { props : undefined }
  }
}
