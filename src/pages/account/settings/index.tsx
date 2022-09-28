import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { useState } from "react"
import { Layout, Settings, SettingsModal } from "src/components"
import { User } from "src/model"
import { IUser } from "src/types"


export default function SettingsPage (props: IUser) {
  const [activeModal, setActiveModal] = useState(false)
  const state = {
    activeModal, setActiveModal
  }
  return (
    <>
      <SettingsModal {...state}/>
      <Layout user={props.user}>
        <Settings {...state} />
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const token = await getToken({ req })

  if(!token) {
    return { props: {}, redirect: { destination: "/login"} }
  }

  const user = await User.get_by_email(token.email)

  const props = {
    user: {
      name: user.name
    }
  }

  return { props }
}