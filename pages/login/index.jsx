
import { useState, useEffect } from "react"
import FormAuth from "../../components/other/formAuth"
import Input from "../../components/other/Input"
import Layout from "../../components/other/layout"
import strDelay from "../../utils/strDelay"


export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")

  const text = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
  useEffect(() => {
    strDelay(text,"auth")
  }, [text])

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