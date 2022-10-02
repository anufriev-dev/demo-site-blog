import { Row,AccountProfileName } from "src/components"
import { themeAccount as theme } from "config/filling_data"
import { useSession } from "next-auth/react"
import { IUser } from "src/types"


function AccountProfile(props: { date: string } & IUser  ) {
  const { data: session } = useSession()

  const { date } = props

  return (
    <div>
      <AccountProfileName user={props.user} />
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
