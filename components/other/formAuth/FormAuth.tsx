import { MouseEvent } from "react"
/* styles
   -------------------------------------------------- */
import { Container } from "@mui/system"
import indexStyles from "./scss/index.module.scss"

interface FormAuthProps {
  submit(e: MouseEvent<HTMLElement>): void;
  title: string;
  children: JSX.Element;
  btnLabel: string;
  text: string;
  id?: any;
}

export default function FormAuth({ submit, title, children, btnLabel, text, id }: FormAuthProps ) {

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