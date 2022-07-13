import { Container } from "@mui/system"
import NavList from "../../pure/NavList"

import styles from "./navbar.module.scss"

export default function Navbar () {
  return (
    <div className={styles.navbarTop}>

      <Container>
        <NavList styles={styles} names={["About","Hello","Support"]}/>
      </Container>

    </div>
  )
}
