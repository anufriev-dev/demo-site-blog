
/* styles
   -------------------------------------------------- */
import { Container } from "@mui/system"
import indexStyles from "./scss/index.module.scss"

export default function FormAuth({ submit, title, children, btnLabel, text, id }) {

  return (
    <>
    <Container>
      <h1 className={indexStyles?.title}>{title}</h1>
      <p id={id} className="text">{text}</p> 
      <form className={indexStyles.form}>
        { children }
        <button onClick={submit} className={indexStyles.form__btn}>{btnLabel}</button>
      </form>
    </Container>
    </>
  )
}