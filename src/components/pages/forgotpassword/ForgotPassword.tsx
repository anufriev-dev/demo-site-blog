import { Container } from "@mui/material"
import { useReducer } from "react"
import { initialState, reducer } from "./reducer"
import { InputLabel } from "src/components"
import { ButtonSubmit, TextWarningForm, Preloader } from "src/components"
import { RegExpEmail } from "config"
import { Email } from "src/http"
import { isValid } from "src/utils"

import style from "./style.module.scss"

function ForgotPassword() {
  const [state, dispatch] = useReducer(reducer,initialState)
  
  const handler = async () => {
    dispatch({ type: "start_loading..." })
    if(!isValid(state.email,{ regexp: RegExpEmail })) {
      dispatch({ type: "error" })
      return
    }
    await Email.change({ email: state.email })
    dispatch({ type: "end_loading" })
  }
  
  const errorMessage = state.isErrorEmail &&
    <TextWarningForm>
      E-mail не соответствует требованиям
    </TextWarningForm>

  if(state.loading) {
    return <Preloader />
  }

  if(state.isActive) {
    return (
      <Container>
        <p className="text">
          Мы отправили на ваш e-mail письмо, со ссылкой для восстановления доступа к сайту.
        </p>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="text-h1">Забыли пароль?</h1>
      <p className="text">Для восстановления пароля введите ваш E-mail</p>
        {errorMessage}
      <InputLabel
        id={"forgot"}
        setState={(value) => dispatch({ type: "input_email", value })} 
        state={state.email} text="E-mail"  
      />
      <ButtonSubmit className={style.button} event={handler} text="Восстановить мой пароль"/>
    </Container>
  )
}

export default ForgotPassword
