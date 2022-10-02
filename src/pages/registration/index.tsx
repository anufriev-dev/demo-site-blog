import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Layout, Registration } from "src/components"



export default function RegistrationPage() {

  return (
    <Layout >
      <Registration />
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
