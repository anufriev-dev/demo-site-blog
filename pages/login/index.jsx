import { useAuth } from "../../components/hooks"
import { Layout, Input, FormAuth, ProviderAccount, TextWarningForm } from "../../components"
import { getToken } from "next-auth/jwt"

import { Container } from "@mui/system"

export default function Login() {

  const { 
    email, pass, 
    setEmail, setPass, submit,
    isErrorEmail, isErrorPass
  } = useAuth()


  return (
    <>
      <Layout>
        <FormAuth
          id={"auth"}
          btnLabel={"Войти"}
          submit={submit}
          title={"Вход"}
        >
          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или неверный</TextWarningForm> }
          <Input setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием или неверный</TextWarningForm> }
          <Input setState={setPass} state={pass} id={"passId"} text={"Пароль"} />
        </FormAuth>
        
        <Container>
          <ProviderAccount url={"/account"}/>
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { req } = context

  const token = await getToken({ req })

  if(token) {
    return { redirect: { destination: "/account" } }
  }

  return { props: {} }
}