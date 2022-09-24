import { Container } from "@mui/system"
import indexStyles from "./index.module.scss"
import { FormAuthProps } from "src/types"

export default function FormAuth(props: FormAuthProps ) {

  const { 
    submit, title, children,
    submitText, text, id 
  } = props

  return (
    <>
    <Container>
      <h1 className={indexStyles?.title}>{title}</h1>
      <p id={id} className="text">{text}</p> 
      <form className={indexStyles.form}>
        { children }
        <button onClick={submit} className={indexStyles.form__btn}>
          { submitText }
        </button>
      </form>
    </Container>
    </>
  )
}