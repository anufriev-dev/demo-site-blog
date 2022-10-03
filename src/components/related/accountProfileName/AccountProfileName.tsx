import { Row, InputLabel, TextWarningForm, ButtonSubmit, NextLink } from "src/components"
import { useAccountProfile } from "src/hooks"
import { IUser } from "src/types"
import style from "./style.module.scss"
import { themeAccount as theme } from "config/filling_data"


function AccountProfileName(props: IUser) {
  const {
    handleChange, save, activeChange,
      name, setName, errorName
  } = useAccountProfile()
 
  return (
    <div>
      { activeChange
        ?
        <div>
          {errorName &&
            <TextWarningForm>Имя не соответствует требованием</TextWarningForm>
          }
          <InputLabel id={"chName"} setState={setName} state={name} text="Имя" />
          <div className={style.buttons}>
            <ButtonSubmit width={"200px"} className={style.button} event={handleChange} text="Отмена" />
            <ButtonSubmit width={"200px"} className={style.button} event={save} text="Сохранить" />
          </div>
        </div>
        :
        <Row
          title={"ФИО"}
          payload={props.user.name}
          bg={theme.bg_first} color={theme.color}
          href={"#"} onClick={handleChange} textLink="Изменить"
         />
      }
    </div>
  )
}

export default AccountProfileName
