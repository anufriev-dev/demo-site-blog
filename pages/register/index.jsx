import FormAuth from "../../components/other/formAuth"
import Layout from "../../components/other/layout"
import Input from "../../components/other/Input"
import { useState } from "react"


export default function Register() {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")
  const [name, setName] = useState("")

  const dropState = () => {
    setEmail("")
    setPass("")
    setName("")
  }

  const submit = async (e) => {
    e.preventDefault()

    // Logic ...

    dropState()
  }

  return (
    <>
      <Layout>
        <FormAuth btnLabel={"Зарегистрироваться"} submit={submit} title={"Регистрация"}>
          <Input  setState={setName} state={name} id={"nameId"} text={"Имя"} /> 
          <Input  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          <Input  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 
        </FormAuth>
      </Layout>
    </>
  )
}