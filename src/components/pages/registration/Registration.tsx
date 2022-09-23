import { useRegistration } from "src/hooks"
import { FormAuth, Layout, InputLabel, TextWarningForm } from "src/components"

function Registration() {
  const { 
    email, pass, name,
    setEmail, setPass, setName, submit, isErrorEmail, isErrorPass, isErrorName
  } = useRegistration()

  const formProps = {
    id: "auth", submitText: "Зарегистрироваться",
    submit, title: "Регистрация"
  }

  return (
    <Layout>
      <FormAuth {...formProps}>
        <div>
          { isErrorName && <TextWarningForm>Имя не соответствует требованием</TextWarningForm> }
          <InputLabel  setState={setName} state={name} id={"nameId"} text={"Имя"} /> 

          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или уже занят</TextWarningForm> }
          <InputLabel  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />

          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием</TextWarningForm> }
          <InputLabel  setState={setPass} state={pass} id={"passId"} text={"Пароль"} /> 
        </div>
      </FormAuth>
  </Layout>
  )
}

export default Registration