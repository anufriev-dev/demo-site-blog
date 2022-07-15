import { Container } from "@mui/system"
import Navbar from "../../pure/Navbar"

/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import navbarTopStyles from "./styles/navbarTop.module.scss"


// fake data
const dataLinks = [
  {namelink: "Статьи",href: "/"},
  {namelink: "Блог",href: "/blog"},
  {namelink: "Книги",href: "#"},
  {namelink: "Видео", href: "#"},
  {namelink: "Подкасты", href: "#"}
]


export default function Header() {

  return (
      
    <header className={indexStyles.header}>

    <div className={navbarTopStyles.navbarWrap}>
      <Container>
          <Navbar styles={navbarTopStyles} data={dataLinks} />
          {/* <button>Войти</button> */}
      </Container>
    </div>

    </header>
    
  )
}