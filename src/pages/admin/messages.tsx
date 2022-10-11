import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin, Messages } from "src/components"
import { Message, User } from "src/model"
import { IMessagePage } from "src/types"
import { useState } from "react"


export default function MessagePage(props: IMessagePage ) {
  const [search, setSearch] = useState("")

  const propsLayout = {
    state: search,
    setState: setSearch
  }
  if(!props) return <div>Loading</div>
  
  return (
    <div>
      <LayoutAdmin {...propsLayout} >
        <Messages {...props} state={search}  />
      </LayoutAdmin>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  const users = await User.get()
  const messages = await Message.getAll()
  
  
  if(role === "ADMIN") {
    return { props: { users, messages } }
  }
  return { props: { users: null } ,redirect: { destination: "/" } }
}
