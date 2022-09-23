import { Layout, Post } from "src/components"
import { Posts } from "src/model"
import { GetServerSideProps } from "next"
import { PostPageProps } from "src/types"


export default function PostPage(props: PostPageProps ) {
  if(!props) return null
  
  return (
    <Layout>
      <Post {...props} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  try{
    const comments = await Posts.getComments(+query.id)

    const post = await Posts.getPost(+query.id)

    return { props: { data: post, comments } }

  }catch(e) {
    /* eslint-disable-next-line no-console */
    console.error("Ошибка на сервере")
    return { props: { data: null } } 
  }
}