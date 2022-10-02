import { Layout } from "src/components"
import Router from "next/router"
import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { User } from "src/model"
import { IUser, PostDB } from "src/types"

export default function Category(props: { post: {id: string} }& IUser ) {

  const { user, post } = props

  return (
    <Layout user={user}>
        Category = {post.id}
        <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context
  const token = await getToken({ req })

  const props = { post: { id: query.category } }

  if(!token) return { props }

  const user = await User.get_by_email(token.email)

  return {
    props: {
      ...props,
      user: {
        name: user.name
      }
    }
  }
}
