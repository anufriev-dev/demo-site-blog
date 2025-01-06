import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { AdminComments, LayoutAdmin } from "src/components"
import { useLayoutAdmin } from "src/hooks"
import { Comment } from "src/model"
import { IAdminCommentsPage } from "src/types"
import { AdminCommentsProvider } from "src/context"


export default function AdminCommentsPage(props: IAdminCommentsPage) {
  const { comments } = props
  const { props: propsLayout } = useLayoutAdmin()

  return (
    <LayoutAdmin {...propsLayout} >
      <AdminCommentsProvider comments={comments}>
        <AdminComments {...propsLayout} comments={comments} />
      </AdminCommentsProvider>
    </LayoutAdmin>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")
  const comments = await Comment.getComments()

  if(role === "ADMIN") {
    return { props: JSON.parse(JSON.stringify({ comments })) }
  }
  return { props: {} ,redirect: { destination: "/" } }
}
