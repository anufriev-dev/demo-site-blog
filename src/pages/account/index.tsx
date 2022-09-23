import { Layout, Account } from "src/components"
import { getToken } from "next-auth/jwt"
import { convertDate, defineRole, getDate } from "../../utils"
import { GetServerSideProps } from "next"

export interface AccountProps {
  isAdmin?: boolean,
  date: string
}

export default function AccountPage(props: AccountProps ) {
  if(!props) return <div>Loading...</div>

  return (
    <Layout>
      <Account {...props} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  let date = token?.date_registration as string

  // formatter date
  date = getDate(date)
  date = convertDate(date)


  if(!token) {
    return { props: {}, redirect: { destination: "/login"} }
  }
  
  return role === "ADMIN"
    ? { props: { isAdmin: true, date } }
    : { props: { date } } 
}
