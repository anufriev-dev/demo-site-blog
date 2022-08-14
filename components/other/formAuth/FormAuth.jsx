
/* styles
   -------------------------------------------------- */
import { Container } from "@mui/system"
import indexStyles from "./scss/index.module.scss"

export default function FormAuth({ submit, title, children, btnLabel }) {

  return (
    <>
    <Container>
      <h1 className={indexStyles?.title}>{title}</h1>
      <p className="text"> Авторизация на сайте пока не обязательна, но в будующем, будет много фичей</p> 
      <form className={indexStyles.form}>
        { children }
        <button onClick={submit} className={indexStyles.form__btn}>{btnLabel}</button>
      </form>
    </Container>
    </>
  )
}