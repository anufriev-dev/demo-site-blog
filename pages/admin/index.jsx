import { Layout } from "../../components"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth].js"
import { Role } from "../../model"

export default function Admin() {

  return (
    <Layout>
      <h1>This is admin panel</h1>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  const email = session?.user.email
  const name = session?.user.name

  const role = await Role.get(email,name)

  if(role === "ADMIN") {
    return { props: { session } }
  }
  return { redirect: { destination: "/" } }
}