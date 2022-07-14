import { Container } from "@mui/system"
import NavList from "./NavList"


export default function Navbar ({ styles, names }) {
  return (
    <nav className={styles.nav}>

      <Container>
        <NavList styles={styles} names={names}/>
      </Container>

    </nav>
  )
}
