import { useSession, signOut } from "next-auth/react"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth].js"
import { Layout } from "../../components"
import { Role } from "../../model"
import { useRouter } from "next/router"

export default function Account({isAdmin}) {
  const { data: session } = useSession()
  const router = useRouter()

  if(!session) return <div>Loading...</div>
  return (
    <Layout>
      <p>Hello, {session.user.name}</p>
      <button
        onClick={() => signOut()}
      >
        Exit
      </button>
      {
        isAdmin && 
        (<button 
           onClick={() => router.push("/admin")}
         >
           Админка
         </button>)
      }
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req,context.res,authOptions)

  const email = session?.user.email
  const name = session?.user.name

  const role = await Role.get(email,name)
  
  if(role === "ADMIN") {
    return { props: { session, isAdmin: true } }
  }

  if(!session) 
    return { redirect: { destination: "/login"} }
  else return { props: { session } } 
}
