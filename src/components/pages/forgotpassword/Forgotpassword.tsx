import { Container } from "@mui/material"
import { InputLabel } from "src/components"
import { ButtonSubmit, TextWarningForm } from "src/components"
import { useForgotpassword } from "src/hooks"

function Forgotpassword() {
  const { 
    email, isActive, handler, setEmail, isErrorEmail
  } = useForgotpassword()


  return (
    <>
      <Container>
        <h1 className="text-h1">Забыли пароль?</h1>
        {
          isActive
          ?
            <p className="text">
              Мы отправили на ваш e-mail письмо, со ссылкой для восстановления доступа к сайту.
            </p>
          :
          <>
          <p className="text">Для восстановления пароля введите ваш E-mail</p>
          {
            isErrorEmail && ( <TextWarningForm>E-mail не соответствует требованиям</TextWarningForm>)
          }
          <InputLabel id={"forgot"} setState={setEmail} state={email} text="E-mail"  />
          <ButtonSubmit event={handler} text="Восстановить мой пароль"/>          
          </>
        }

      </Container>
    </>
  )
}

export default Forgotpassword