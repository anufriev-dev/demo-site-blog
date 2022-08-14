
import { useState } from "react"
import FormAuth from "../../components/other/formAuth"
import Input from "../../components/other/Input"
import Layout from "../../components/other/layout"


export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")

  const dropState = () => {
    setEmail("")
    setPass("")
  }

  const submit = async (e) => {
    e.preventDefault()

    // Logic ...

    dropState()
  }

  return (
    <>
      <Layout>
        <FormAuth btnLabel={"Войти"} submit={submit} title={"Вход"}>
          <Input  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          <Input  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 
        </FormAuth>
      </Layout>
    </>
  )
}