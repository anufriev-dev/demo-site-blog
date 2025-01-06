import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Home, Layout } from "src/components"
import { Posts, User } from "src/model"
import { IHomePage, IUser } from "src/types"


export default function HomePage(props: IHomePage & IUser ) {
  if(!props) return <h1>Loading...</h1>

  return (
    <Layout user={props.user}>
      <Home data={props.data}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const result = await Posts.getLastComments(6)

  const token = await getToken({ req })
  if(!token) {
    return { props: { data: result } }
  }

  const user = await User.get_by_email((token.email))

  return {
    props:  JSON.parse(JSON.stringify({
      data: result,
      user: { name: user?.name }
    }))
  }
}
