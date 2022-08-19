import { Container } from "@mui/system"
/* Components 
   -------------------------------------------------- */
import CardFooter from "../../ui/CardFooter"
import LinksFooter from "../../ui/LinksFooter"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import cardStyles from "./styles/card.module.scss"
import linksStyles from "./styles/links.module.scss"
import copyrightStyles from "./styles/copyright.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataLinksFooter } from "../../../fake_database"
import { dataAbout } from "../../../fake_database"


export default function Footer() {
  
  return (
    <footer className={indexStyles.footer}>

        {/* карточки */}
      <div className={cardStyles.wrapCard}>
        <Container>
          <CardFooter styles={cardStyles} card={dataAbout} />
        </Container>
      </div>

        {/* ссылки */}
      <div className={linksStyles.wrapLinks}>
        <Container>
          <LinksFooter styles={linksStyles} data={dataLinksFooter}/>
        </Container>
      </div>

        {/* копирайт */}
      <div className={copyrightStyles.wrapCopyright}>
        <Container>
          <p className={copyrightStyles.title}>
            Copyright © 2022 Ануфриев Георгий. Тираж 1 штука. Отпечатано на компьютере.
          </p>
        </Container>
      </div>
    </footer>
  )
}