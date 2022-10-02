import { Container } from "@mui/system"
import { InputLabel, ButtonSubmit, TextWarningForm } from "src/components"
import { useChange } from "src/hooks"


function Change(props) {
  const { pass, setPass, handleHange, errorPass, isSuccess } = useChange(props)


  return (
    <Container>
      {isSuccess ?
        <>
          <h1 className={"text-h1"}>Ваш пароль был успешно изменен.</h1>
        </>
        :
          <>
            <h1 className="text-h1">Введите новый пароль</h1>
            {
              errorPass && (<TextWarningForm>Пароль не соответствует требованием или неверный</TextWarningForm>)
            }
            <InputLabel id={"passwd"} setState={setPass} state={pass} text="Пароль"/>
            <ButtonSubmit event={handleHange} text="Обновить"/>
          </>
        }

    </Container>
  )
}

export default Change
