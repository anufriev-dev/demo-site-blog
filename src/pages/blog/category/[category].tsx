import { Blog, Layout } from "src/components"
import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Posts, User } from "src/model"
import { ICategoryPage, IUser } from "src/types"



export default function CategoryPage(props: ICategoryPage & IUser ) {

  const { user, data, allPosts, currentPage, maxPages } = props
  const propsCateogry = {
    data, allPosts, currentPage, maxPages
  }

  return (
    <Layout user={user}>
        <Blog {...propsCateogry} />
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query: { page = 1, search = "", category }, req} = context
  
  const token = await getToken({ req })
  
  const { data, allPosts, maxPages } = await Posts.getPostJoinCommentsByCacegory(category, page, search)
  
  const props = {
    currentPage: +page, data, maxPages, allPosts
  }

  if(!token) return { props }

  const user = await User.get_by_email(token.email)

  return {
    props: {
      ...props,
      user: {
        name: user.name
      }
    }
  }
}
