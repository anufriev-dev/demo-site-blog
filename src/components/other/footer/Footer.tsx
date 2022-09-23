import { Container } from "@mui/system"
import { CardFooter, LinksFooter, CopyrightFooter } from "src/components"

import { dataLinksFooter, dataAbout } from "fake_database"
import indexStyles from "./index.module.scss"


export default function Footer() {
  return (
    <footer className={indexStyles.footer}>
        {/* карточки */}
      <div className={indexStyles.card}>
        <Container>
          <CardFooter card={ dataAbout } />
        </Container>
      </div>
        {/* ссылки */}
      <div className={indexStyles.links}>
        <Container>
          <LinksFooter data={dataLinksFooter}/>
        </Container>
      </div>
        {/* копирайт */}
      <div className={indexStyles.copyright}>
        <CopyrightFooter />
      </div>
    </footer>
  )
}