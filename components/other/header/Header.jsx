import { Container } from "@mui/system"
import { useRouter } from "next/router"
import { DELAY_DROP_DOWN_BURGER_MENU } from "../../../config"
/* Components 
-------------------------------------------------- */
import { Navbar, BurgerMenu, DropDownMenu } from "../../../components/index"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import navbarTopStyles from "./styles/navbarTop.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataLinks } from "../../../fake_database"


export default function Header(props) {
  const { isActiveBurger, setIsActiveBurger } = props
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
            <div className={navbarTopStyles.user}>
              Гость 
            </div>
            {/* drop-down меню */}
            <DropDownMenu styles={navbarTopStyles} />

            <BurgerMenu
              isActiveBurger={ isActiveBurger }
              setIsActiveBurger={ setIsActiveBurger }
              styles={ navbarTopStyles }
            />
          </div>
        </Container>
      </div>

    </header>
    
  )
}