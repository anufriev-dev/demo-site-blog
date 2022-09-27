import { Layout,Login } from "src/components"
import { getToken } from "next-auth/jwt"
import { GetServerSideProps } from "next"

export default function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context

  const token = await getToken({ req })

  if(token) {
    return { props: {}, redirect: { destination: "/account" } }
  }

  return { props: {} }
}