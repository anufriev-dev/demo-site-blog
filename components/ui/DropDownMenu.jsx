import { NextJsActiveLink } from "../../components"

const DropDownMenu = ({ styles }) => (
  <div className={styles.dropDown__wrapp}>
    <div className={styles.dropDown}>
      <div className={styles.dropDown__item}>
        <NextJsActiveLink classNameProps={styles.dropDown__link} href={"/login"} name="Вход"/>

      </div>
      <div className={styles.dropDown__item}>
        <NextJsActiveLink classNameProps={styles.dropDown__link} href={"/register"} name="Регистрация"/>
      </div>
    </div>
  </div>
)

export default DropDownMenu