import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { Layout, ContactMe } from "src/components"
import { User } from "src/model"
import { IUser } from "src/types"

export default function ContactMePage(props: IUser) {
  return (
    <>
      <Layout user={props.user}>
        <ContactMe />
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context

  const token = await getToken({ req })

  if(!token) return { props: {} }

  const user = await User.get_by_email(token.email)

  return { props: {
      user: {
        name: user.name
      }
    }
  }
}
