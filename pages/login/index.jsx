import { useAuth } from "../../components/hooks"
import { Layout, Input, FormAuth, ProviderAccount } from "../../components"
import { getSession } from "next-auth/react"

import { Container } from "@mui/system"
import { login } from "../../http/blogApi"

export default function Login() {

  const { 
    email, pass, 
    setEmail, setPass, dropState
  } = useAuth()

  const submit = async (e) => {
    e.preventDefault()
    const body = {
      email,
      passwd: pass
    }
    login(body)
      .then(data => {
        console.log(data)
      },alert)
    dropState()
  }

  return (
    <>
      <Layout>
        <FormAuth 
          id={"auth"}
          btnLabel={"Войти"} 
          submit={submit} 
          title={"Вход"}
        >
          <Input  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          <Input  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 
        </FormAuth>
        <Container>
          <ProviderAccount />
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {

  
  const session = await getSession(context)
  if(session) {
    return {
      redirect: { destination: "/account" }
    }
  }else {
    return { props: { session } }
  }
}