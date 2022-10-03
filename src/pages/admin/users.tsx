import { getToken } from "next-auth/jwt"
import { defineRole } from "src/utils"
import { GetServerSideProps } from "next"
import { LayoutAdmin, AdminUser, Modal, ButtonSubmit } from "src/components"
import { useLayoutAdmin } from "src/hooks"
import { User } from "src/model"
import { IAdminUserPage } from "src/types"
import { useState } from "react"



export default function AdminUserPage(props: IAdminUserPage ) {
  const { props: propsLayout } = useLayoutAdmin()

  if(!props) return <div>Loading</div>
  
  return (
    <div>
      <LayoutAdmin {...propsLayout} >
        <AdminUser {...propsLayout} users={props.users} />
      </LayoutAdmin>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  const role = defineRole(token?.role as "1"|"2")

  const users = await User.get()
  
  
  if(role === "ADMIN") {
    return { props: { users } }
  }
  return { props: { users: null } ,redirect: { destination: "/" } }
}
