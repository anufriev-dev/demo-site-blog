import { FormAuth, Layout, Input } from "../../components"
import { useRegistration } from "../../components/hooks"


export default function Register() {
  const { 
    email, pass, name,
    setEmail, setPass, setName, dropState
  } = useRegistration()

  const submit = async (e) => {
    e.preventDefault()
    // Logic ...
    dropState()
  }

  return (
    <>
      <Layout>
        <FormAuth id={"auth"} btnLabel={"Зарегистрироваться"} submit={submit} title={"Регистрация"}>
          <Input  setState={setName} state={name} id={"nameId"} text={"Имя"} /> 
          <Input  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          <Input  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 
        </FormAuth>
      </Layout>
    </>
  )
}