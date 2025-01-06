import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Layout, Blog } from "src/components"
import { Posts, User } from "src/model"
import { IBlog, IUser } from "src/types"


export default function IndexBlogPage(props: IBlog & IUser) {

  if(!props) return null

  return (
    <Layout user={props.user}>
      <Blog {...props}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const { query: { page = 1, search = "" }, req} = context

  // получаем данные постов
  const {
    data, allPosts, maxPages
  } = await Posts.getPostJoinComments(+page, search as string)

  const token = await getToken({ req })

  const props = {
    currentPage: +page, data, maxPages, allPosts
  }

  if(!token) {
    return { props }
  }
  const user = await User.get_by_email(token.email)

  return {
    props: JSON.parse(JSON.stringify({
      ...props,
      user: {
        name: user.name
      }
    }))
  }
}
