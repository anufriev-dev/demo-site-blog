import { Container } from "@mui/system"
import Navbar from "../../pure/Navbar"

/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import navbarTopStyles from "./styles/navbarTop.module.scss"


export default function Header() {

  return (
    
    <header className={indexStyles.header}>

      <Container>

        <div className={indexStyles.header__container}>
          <Navbar styles={navbarTopStyles} names={["Блог","Статьи","Книги","Видео","Подкасты"]} />

          <button>Войти</button>
        </div>

      </Container>

    </header>
    
  )
}