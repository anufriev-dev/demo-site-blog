import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Layout, Settings } from "src/components"

export default function SettingsPage () {
  return (
    <Layout>
      <Settings />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  if(!token) {
    return { props: {}, redirect: { destination: "/login"} }
  }

  return {
    props:{}
  }
}