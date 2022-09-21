import { Container } from "@mui/system"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { UserApi } from "../../../http"

function Account(props) {
  const { isAdmin, date } = props

  const { data: session } = useSession()
  const router = useRouter()

  const delete_account = async (e) => {
    const result = await UserApi.delete()
    if(result) signOut()
  }

  if(!session || !props) return <div>Loading...</div>

  return (
    <div>
      <Container>
        <p>Hello, {session?.user.name}</p>
        <p>Дата регистрации аккаунта { date }</p>
        <button onClick={() => signOut()} >Exit</button>
        { 
          isAdmin && 
          <button onClick={() => router.push("/admin")}> Админка </button> 
        }
        <button onClick={delete_account}>Удалить аккаунта</button>
      </Container>
    </div>
  )
}

export default Account