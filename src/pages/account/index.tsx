import { Layout, Account } from "src/components"
import { getToken } from "next-auth/jwt"
import { convertDate, dateTimeZone, defineRole, getDate } from "../../utils"
import { GetServerSideProps } from "next"
import { AccountProps } from "src/types"


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

  let date = new Date(token?.date_registration as string ) as any
  // formatter date
  date = dateTimeZone(date)
  date = getDate(date)
  date = convertDate(date)

  if(!token) {
    return { props: {}, redirect: { destination: "/login"} }
  }
  
  return role === "ADMIN"
    ? { props: { isAdmin: true, date } }
    : { props: { date } } 
}
