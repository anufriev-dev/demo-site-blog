import { Container } from "@mui/system"
import { AccountProps, IUser } from "src/types"
import { AccountProfile, ButtonSubmit } from "src/components"
import style from "./style.module.scss"
import Router from "next/router"
import { useEffect } from "react"
import { strDelay } from "src/utils"


function Account(props: AccountProps & IUser ) {
  const {
    isAdmin, date,
  } = props
  const text = "Ваши персональные данные"
  useEffect(() => {
    strDelay(text,"text")
  },[text])

  if(!props) return <div>Loading...</div>

  return (
    <div>
      <Container>
        <div className={style.wrapp}>
        <h1 className={style.heading}>Общая информация</h1>
        <p id="text" className={style.about}></p>

        <AccountProfile user={props.user} date={date} />
        <div className={style.buttons}>
          <ButtonSubmit
            event={() => Router.push(process.env["NEXT_PUBLIC_SETTINGS_URL"]) }
            text={"Настройки"}
            className={style.buttonSettings}
            />
              {
                isAdmin &&
                <ButtonSubmit
                event={() => Router.push("/admin")}
                  text={"Админка"}
                  className={style.buttonAdmin}
                />
              }

        </div>

        </div>
      </Container>
    </div>
  )
}

export default Account
