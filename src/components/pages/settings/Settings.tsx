import { Container } from "@mui/material"
import Router from "next/router"
import { ButtonSubmit } from "src/components"
import { useSettings } from "src/hooks"
import { ISettings } from "src/types"
import style from "./style.module.scss"

function Settings(props: ISettings) {
  const { setActiveModal, activeModal } = props
  const { exit } = useSettings()

  return (
    <>
    <Container>
      <h1 className={style.heading}>Настройки</h1>
      <div className={style.wrapp}>
        <div>
          <ButtonSubmit 
            width={"200px"} 
            className={style.back}
            event={() => Router.back()} text={"Назад"}
          />
        </div>
        <div>
          <ButtonSubmit
            width={"200px"} 
            className={style.exit_account}
            event={exit} text={"Выйти из аккаунта"}
          />
        </div>
        <div>
          <ButtonSubmit
            width={"200px"} 
            className={style.delete_account}
            event={() => setActiveModal(!activeModal)} text={"Удалить аккаунта"}
          />
        </div>
      </div>
    </Container>
  </>
  )
}

export default Settings
