import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Layout, Registration } from "src/components"
import { User } from "src/model"



export default function RegistrationPage() {

  return (
    <Layout >
      <Registration />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const r = await User.get()
  console.log(r)
  const token = await getToken({ req })

  if(token) {
    return { props: {}, redirect: { destination: "/account" } }
  }
  return { props: {} }
}
