import { GetServerSideProps } from "next"
import { Layout, MainBlog } from "../../components/index"
import { Posts } from "../../model"

export interface indexBlogProps  {
  currentPage: number;
  data: object[];
  maxPages: number;
  allPosts: number;
}

export default function IndexBlog(props: indexBlogProps) {
  if(!props) return null

  return (
    <Layout>
      <MainBlog {...props}/>
    </Layout>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) =>  {
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
