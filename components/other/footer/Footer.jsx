import { Container } from "@mui/system"
import CardFooter from "../../pure/CardFooter"

/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import cardFooter from "./styles/cardFooter.module.scss"


const data = [
  {
    title: "О блоге", 
    text: "Программист, начинающий, учился всему сам с полного нуля, мой первый работающий сайт в интернете",

  },
  {
    title: "Обратная связь",
    text: "Без всякого зазрения совести отвечаю всем, по возможности",
    namelink: "Написать мне",
    href: "#"
  },
]




export default function Footer() {
  
  return (
    <footer className={indexStyles.footer}>

      <Container>
          {/* карточки */}
        <CardFooter styles={cardFooter} card={data} />

          {/* todo: ссылки */}
  
          {/* todo: копирайт */}

      </Container>


    </footer>
  )
}