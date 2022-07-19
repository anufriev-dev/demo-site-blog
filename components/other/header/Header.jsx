import { Container } from "@mui/system"
import Navbar from "../../ui/Navbar"
import BurgerMenu from "../../ui/BurgerMenu"
import { useRouter } from "next/router"
import { DELAY_DROP_DOWN_BURGER_MENU } from "../../../config/config"

/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import navbarTopStyles from "./styles/navbarTop.module.scss"

/* fake data
   -------------------------------------------------- */
import { dataLinks } from "../../../fake_database"



export default function Header({ isActiveBurger, setIsActiveBurger }) {

  const router = useRouter()

  const closeNavBar = (e,href) => {
    if(isActiveBurger) {
      e.preventDefault()
      setIsActiveBurger(false)
      setTimeout(() => {
        router.push(href)
      },DELAY_DROP_DOWN_BURGER_MENU) 
    }
  }

  return (

    <header className={ indexStyles.header }>

      {/* nav-bar Top */}
      <div className={ navbarTopStyles.navbarWrap }>
        <Container>
          <div onClick={(e) => e.stopPropagation()} className={ navbarTopStyles.reverseWrap }>
            <Navbar closeNavBar={ closeNavBar } isActiveBurger={ isActiveBurger } styles={ navbarTopStyles } data={ dataLinks } />
            <BurgerMenu
              isActiveBurger={ isActiveBurger }
              setIsActiveBurger={ setIsActiveBurger }
              styles={ navbarTopStyles }
            />
          </div>
        </Container>
      </div>

      {/* Other ... */}

    </header>
    
  )
}