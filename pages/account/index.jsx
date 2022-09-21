import { Layout, Account as UserAccount } from "../../components"
import { getToken } from "next-auth/jwt"
import { convertDate, defineRole, getDate } from "../../utils"


export default function Account(props) {
  if(!props) return <div>Loading...</div>

  return (
    <Layout>
      <UserAccount {...props} />
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role)
  let date = token?.date_registration

  // formatter date
  date = getDate(date)
  date = convertDate(date)

  if(!token) {
    return { redirect: { destination: "/login"} }
  }

  return role === "ADMIN"
    ? { props: { isAdmin: true, date } }
    : { props: { date } } 
}
