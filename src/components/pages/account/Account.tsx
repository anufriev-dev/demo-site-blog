import { Container } from "@mui/system"
import { AccountProps } from "src/types"
import { AccountProfile, ButtonSubmit } from "src/components"
import style from "./style.module.scss"
import Router from "next/router"


function Account(props: AccountProps) {  
  const { 
    isAdmin, date
  } = props
    
  if(!props) return <div>Loading...</div>
  
  return (
    <div>
      <Container>
        <div className={style.wrapp}>
        <h1 className={style.heading}>Общая информация</h1>
        <p className={style.about}>Ваши персональные данные</p>

        <AccountProfile date={date} />

        {/* <NextJsActiveLink 
          name="Настройки"  
          href={} 
          classNameProps={style.settings}
        /> */}
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