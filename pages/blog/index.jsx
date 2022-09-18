import { Layout, MainBlog } from "../../components/index"
import { Posts } from "../../model"


export default function IndexBlog(props) {
  if(!props) return null

  const { 
    data, 
    allPosts, 
    maxPages, 
    currentPage
  } = props
  
  return (
    <Layout>
      <MainBlog
        post={data}
        posts={allPosts}
        maxPages={maxPages} 
        currentPage={currentPage} 
      />
    </Layout>
  )
}

export const getServerSideProps = async (context) =>  {
  const { query: { page = 1, search = "" }} = context
  
  try{
    // получаем данные постов
    const { data, allPosts , maxPages } = await Posts.getPostJoinComments(page,search)
        
    return { 
      props: { currentPage: +page, data, maxPages, allPosts }
    }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере", e)
    return { props : undefined }
  }
}
