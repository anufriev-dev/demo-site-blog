import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { AdminComments, LayoutAdmin } from "src/components"
import { useLayoutAdmin } from "src/hooks"
import { Comment } from "src/model"
import { IAdminCommentsPage } from "src/types"


export default function AdminCommentsPage(props: IAdminCommentsPage) {
  const { comments } = props
  const { props: propsLayout } = useLayoutAdmin()
  
  return (
    <LayoutAdmin {...propsLayout} >
      <AdminComments {...propsLayout} comments={comments} />
    </LayoutAdmin>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")
  const comments = await Comment.getComments()

  console.log(comments);
  
  if(role === "ADMIN") {
    return { props: { comments } }
  }
  return { props: {} ,redirect: { destination: "/" } }
}
