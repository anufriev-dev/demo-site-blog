import { NextJsActiveLink } from "../../components"
import { useSession, signOut } from "next-auth/react"

const DropDownMenu = ({ styles }) => {
  
  const { data: session } = useSession()

  return (
    <div className={styles.dropDown__wrapp}>
    <div className={styles.dropDown}>
      { session 
        ?
        <div className={styles.dropDown__item}>
          <NextJsActiveLink href={"#"} classNameProps={styles.dropDown__link} onClick={signOut} name={"Выйти"} />
        </div>
        :
        <>
          <div className={styles.dropDown__item}>
            <NextJsActiveLink classNameProps={styles.dropDown__link} href={"/login"} name="Вход"/>
          </div>
          <div className={styles.dropDown__item}>
            <NextJsActiveLink classNameProps={styles.dropDown__link} href={"/register"} name="Регистрация"/>
          </div>
        </>
      }
    </div>
  </div>
  )
}

export default DropDownMenu