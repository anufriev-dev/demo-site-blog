import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"
import { useState } from "react"
import { Layout, Settings, SettingsModal } from "src/components"


export default function SettingsPage () {
  const [activeModal, setActiveModal] = useState(false)
  const props = {
    activeModal, setActiveModal
  }
  return (
    <>
      <SettingsModal {...props}/>
      <Layout>
        <Settings {...props} />
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

  return {
    props:{}
  }
}