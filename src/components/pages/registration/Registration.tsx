import { useRegistration } from "src/hooks"
import { FormAuth, ButtonSubmit, InputLabel, TextWarningForm, ProviderAccount } from "src/components"
import { Container } from "@mui/system"
import style from "./style.module.scss"


function Registration() {
  const { 
    email, pass, name,
    setEmail, setPass, setName, submit,
    formProps, isErrorEmail, isErrorPass, isErrorName
  } = useRegistration()

  return (
    <div>
        <FormAuth {...formProps}>
        <div>
          { isErrorName && <TextWarningForm>Имя не соответствует требованием</TextWarningForm> }
          <InputLabel  setState={setName} state={name} id={"nameId"} text={"Имя"} /> 

          { isErrorEmail && <TextWarningForm>E-mail не соответствует требованием или уже занят</TextWarningForm> }
          <InputLabel  setState={setEmail} state={email}  id={"emailId"} text={"E-mail"} />

          { isErrorPass && <TextWarningForm>Пароль не соответствует требованием</TextWarningForm> }
          <InputLabel  setState={setPass} state={pass} id={"passId"} text={"Пароль"} />
          <div className={style.wrapp}>
            <ButtonSubmit className={style.registration} event={submit} text={"Зарегистрироваться"} />
          </div>
        </div>
      </FormAuth>
      <Container>
        <ProviderAccount url={"/account"}/>
      </Container>
    </div>
  )
}

export default Registration