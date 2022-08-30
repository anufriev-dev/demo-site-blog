import { useAuth } from "../../components/hooks"
import { Layout, Input, FormAuth,  } from "../../components"

export default function Login() {
  
  const { 
    email, pass, 
    setEmail, setPass, dropState
  } = useAuth()

  const submit = async (e) => {
    e.preventDefault()
    // Logic ...
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
      </Layout>
    </>
  )
}