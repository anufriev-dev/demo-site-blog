import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin, AdminUser } from "src/components"
import { useLayoutAdmin } from "src/hooks"
import { User } from "src/model"
import { IAdminUserPage } from "src/types"



export default function AdminUserPage(props: IAdminUserPage ) {
  const { props: propsLayout } = useLayoutAdmin()
  if(!props) return <div>Loading</div>
  return (
    <LayoutAdmin {...propsLayout} >
      <AdminUser {...propsLayout} users={props.users}  />
    </LayoutAdmin>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  const users = await User.get()
  
  
  if(role === "ADMIN") {
    return { props: { users } }
  }
  return { props: { users: null } ,redirect: { destination: "/" } }
}
