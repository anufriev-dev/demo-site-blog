import { Change, Layout } from "src/components"
import { GetServerSideProps } from "next"
import { env } from "process"
import tokenJWT from "jsonwebtoken"

export default function ChangePage (props) {

  return(
    <Layout>
      <Change {...props}  />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { token } = query

  let result: any
  try {
    result = tokenJWT.verify(token?.toString(), env["NEXTAUTH_SECRET"])
  } catch(e) {}

  if(!result) {
    return { props: {} ,redirect: { destination: "/login" } }
  }

  return {
    props: {
      email: result.email
    }
  }
}
