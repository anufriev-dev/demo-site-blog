import { getToken } from "next-auth/jwt"
import { FormAuth, Layout, Input, TextWarningForm } from "../../components"
import { useRegistration } from "../../components/hooks"


export default function Register() {

  const { 
    email, pass, name,
    setEmail, setPass, setName, submit, isErrorEmail, isErrorPass, isErrorName
  } = useRegistration()

  
  return (
    <>
      <Layout>
        <FormAuth id={"auth"} btnLabel={"Зарегистрироваться"} submit={submit} title={"Регистрация"}>
          
          { isErrorName && <TextWarningForm>Имя не соответствует требованием</TextWarningForm> }
          <Input  setState={setName} state={name} id={"nameId"} text={"Имя"} /> 

          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или уже занят</TextWarningForm> }
          <Input  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />

          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием</TextWarningForm> }
          <Input  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 

        </FormAuth>
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