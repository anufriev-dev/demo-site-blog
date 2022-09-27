import { Container } from "@mui/system"
import { useAuth } from "src/hooks"
import { InputLabel,ButtonSubmit, FormAuth, ProviderAccount, TextWarningForm } from "src/components"
import style from "./style.module.scss"
import Router from "next/router"


function Login() {
  const { 
    email, pass, formProps,
    setEmail, setPass,
    isErrorEmail, isErrorPass, 
    submitExit, eventForgetPasswd
  } = useAuth()


  
  return (
    <div>
    <FormAuth {...formProps}>
        <div>
          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или неверный</TextWarningForm> }
          <InputLabel setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />
          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием или неверный</TextWarningForm> }
          <InputLabel setState={setPass} state={pass} id={"passId"} text={"Пароль"} />
          <div className={style.buttons}>
            <ButtonSubmit className={style.signIn}  event={submitExit} text={"Войти"} />
            <ButtonSubmit 
              className={style.exit}  
              event={eventForgetPasswd} text={"Забыли пароль?"} 
            />
          </div>
        </div>
      </FormAuth>
      <Container>

        <ProviderAccount url={"/account"}/>
      </Container>
    </div>
  )
}

export default Login