import { Container } from "@mui/system"
import { useAccount } from "src/hooks"
import { AccountProps } from "src/types"

function Account(props: AccountProps) {
  const { 
    isAdmin, date, delete_account,
    router, session, exit 
  } = useAccount(props)

  if(!props) return <div>Loading...</div>

  return (
    <div>
      <Container>
        <p>Hello, {session?.user.name}</p>
        <p>Дата регистрации аккаунта { date }</p>
        <button onClick={exit} >Exit</button>
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