import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin, AdminPostsBlog } from "src/components"
import { useLayoutAdmin } from "src/hooks"
import { Posts } from "src/model"
import { IAdminPostPage } from "src/types"



export default function AdminPostPage(props: IAdminPostPage) {
  const { posts } = props
  const { props: propsLayout } = useLayoutAdmin()
  if(!props) return <div>Loading</div>
  return (
    <LayoutAdmin {...propsLayout} >
      <AdminPostsBlog {...propsLayout} posts={posts} />
    </LayoutAdmin>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")
  const posts = await Posts.getPosts()

  if(role === "ADMIN") {
    return { props: { posts } }
  }
  return { props: {} ,redirect: { destination: "/" } }
}
