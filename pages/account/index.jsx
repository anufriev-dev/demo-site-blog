import { useSession, signOut  } from "next-auth/react"
import { Layout } from "../../components"
import { useRouter } from "next/router"
import { UserApi } from "../../http"
import { getToken } from "next-auth/jwt"
import { defineRole } from "../../utils"

export default function Account({isAdmin}) {
  const { data: session } = useSession()
  const router = useRouter()

  const delete_account = async (e) => {

    const result = await UserApi.delete()
    if(result) {
      signOut()
    }
  }

  if(!session) return <div>Loading...</div>
  return (
    <Layout>
      <p>Hello, {session.user.name}</p>
      <button onClick={() => signOut()} >Exit</button>
      { 
        isAdmin && 
        <button onClick={() => router.push("/admin")}> Админка </button> 
      }
      <button onClick={delete_account}>Удалить аккаунта</button>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role)

  if(role === "ADMIN") {
    return { props: { isAdmin: true } }
  }

  if(!token) {
    return { redirect: { destination: "/login"} }
  }
  else{
    return { props: {  } } 
  }
}
