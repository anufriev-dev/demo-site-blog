import { useRegistration } from "src/hooks"
import { FormAuth, ButtonSubmit, Layout, InputLabel, TextWarningForm, ProviderAccount } from "src/components"
import { Container } from "@mui/system"

function Registration() {
  const { 
    email, pass, name,
    setEmail, setPass, setName, submit,
    formProps, isErrorEmail, isErrorPass, isErrorName
  } = useRegistration()

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
          <ButtonSubmit event={submit} text={"Зарегистрироваться"} />
        </div>
      </FormAuth>
      <Container>
        <ProviderAccount url={"/account"}/>
      </Container>
  </Layout>
  )
}

export default Registration