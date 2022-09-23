import { Container } from "@mui/system"
import { useAuth } from "src/hooks"
import { InputLabel, FormAuth, ProviderAccount, TextWarningForm } from "src/components"


function Login() {
  const { 
    email, pass, 
    setEmail, setPass, submit,
    isErrorEmail, isErrorPass
  } = useAuth()

  const formProps = {
    id: "auth", submitText: "Войти",
    submit, title: "Вход"
  }
  
  return (
    <div>
    <FormAuth {...formProps}>
        <div>
          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или неверный</TextWarningForm> }
          <InputLabel setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием или неверный</TextWarningForm> }
          <InputLabel setState={setPass} state={pass} id={"passId"} text={"Пароль"} />
        </div>
      </FormAuth>

      <Container>
        <ProviderAccount url={"/account"}/>
      </Container>
    </div>
  )
}

export default Login