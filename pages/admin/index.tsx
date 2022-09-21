import { Layout } from "../../components"
import { getToken } from "next-auth/jwt"
import { defineRole } from "../../utils"

export default function Admin() {

  return (
    <Layout>
      <h1>This is admin panel</h1>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role)
  // const role = await Role.get(email,name)

  if(role === "ADMIN") {
    return { props: { } }
  }
  return { redirect: { destination: "/" } }
}