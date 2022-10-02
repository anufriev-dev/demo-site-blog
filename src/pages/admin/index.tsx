import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin } from "src/components"

export default function Admin() {

  return (
    <LayoutAdmin>
      <h1>This is admin panel</h1>
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
