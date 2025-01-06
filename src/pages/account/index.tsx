import { Layout, Account } from "src/components"
import { getToken } from "next-auth/jwt"
import { convertDate, dateTimeZone, defineRole, getDate } from "../../utils"
import { GetServerSideProps } from "next"
import { AccountProps, IUser } from "src/types"
import { User } from "src/model"


export default function AccountPage(props: AccountProps & IUser ) {

  if(!props) return <div>Loading...</div>
  return (
    <Layout user={props.user}>
      <Account {...props} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  let date = new Date(token?.date_registration as string ) as any
  // formatter date
  date = dateTimeZone(date)
  date = getDate(date)
  date = convertDate(date)

  if(!token) {
    return { props: {}, redirect: { destination: "/login"} }
  }

  const user = await User.get_by_email(token.email)

  const props = { date, user: { name: user.name } }

  return role === "ADMIN"
    ? { props: {
        ...props, isAdmin: true
      }
    }
    : { props }
}
