import { Row } from "src/components"
import { themeAccount as theme } from "config/filling_data"
import { useSession } from "next-auth/react"

function AccountProfile(props) { 
  const { data: session } = useSession()

  const { date } = props

  return (
    <div>
      <Row 
        title={"ФИО"} 
        payload={session?.user.name} 
        bg={theme.bg_first} color={theme.color}
      />
      <Row 
        title={"Дата регистрации"} 
        payload={date} 
        bg={theme.bg_second} color={theme.color} 
      />
      <Row 
        title={"E-mail"} 
        payload={session?.user.email} 
        bg={theme.bg_first} 
        color={theme.color}
      />
  </div>
  )
}

export default AccountProfile