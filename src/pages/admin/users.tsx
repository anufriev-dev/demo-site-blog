import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin, AdminUser } from "src/components"
import { useLayoutAdmin } from "src/hooks"

export default function AdminUserPage() {
  const { props } = useLayoutAdmin()
  
  return (
    <LayoutAdmin {...props} >
      <AdminUser {...props} />
    </LayoutAdmin>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  if(role === "ADMIN") {
    return { props: {} }
  }
  return { props: {} ,redirect: { destination: "/" } }
}
