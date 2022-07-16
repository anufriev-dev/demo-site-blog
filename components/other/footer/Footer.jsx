import { Container } from "@mui/system"
import CardFooter from "../../ui/CardFooter"
import LinksFooter from "../../ui/LinksFooter"


/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import cardStyles from "./styles/card.module.scss"
import linksStyles from "./styles/links.module.scss"
import copyrightStyles from "./styles/copyright.module.scss"


// fake data
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
// fake data
const dataLinks = [
  {namelink: "Последние комментарии",href: "#"},
  {namelink: "О блоге",href: "#"},
  {namelink: "Privacy Policy",href: "#"},
  {namelink: "Мои железки", href: "#"}
]


export default function Footer() {
  
  return (
    <footer className={indexStyles.footer}>

        {/* карточки */}
      <div className={cardStyles.wrapCard}>
        <Container>
          <CardFooter styles={cardStyles} card={data} />
        </Container>
      </div>

        {/* ссылки */}
      <div className={linksStyles.wrapLinks}>
        <Container>
          <LinksFooter styles={linksStyles} data={dataLinks}/>
        </Container>
      </div>

        {/* копирайт */}
      <div className={copyrightStyles.wrapCopyright}>
        <Container>
          <p className={copyrightStyles.title}>
            Copyright © 2022 Ануфриев Георгий. Тираж 1 штука. Отпечатано на компьютере. А за права отвечаю, или постараюсь.
          </p>
        </Container>
      </div>

    </footer>
  )
}