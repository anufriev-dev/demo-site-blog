import { Container } from "@mui/system"
import indexStyles from "./index.module.scss"
import { FormAuthProps } from "src/types"

export default function FormAuth(props: FormAuthProps ) {

  const { 
    title, children,
    text, id 
  } = props

  return (
    <>
    <Container>
      <h1 className={indexStyles?.title}>{title}</h1>
      <p id={id} className={`text ${indexStyles.text}`}>{text}</p> 
      <form className={indexStyles.form}>
        { children }
      </form>
    </Container>
    </>
  )
}