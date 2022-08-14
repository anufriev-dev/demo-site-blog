import { Container } from "@mui/system"
import { useRouter } from "next/router"
import { DELAY_DROP_DOWN_BURGER_MENU } from "../../../config/config"
/* Components 
   -------------------------------------------------- */
import Navbar from "../../ui/Navbar"
import BurgerMenu from "../../ui/BurgerMenu"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"
import navbarTopStyles from "./styles/navbarTop.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataLinks, dataLinksDropDown } from "../../../fake_database"
import NextJsActiveLink from "../../ui/NextJsActiveLink"


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
            <div className={navbarTopStyles.user}>
              Гость 
            </div>
            {/* drop-down меню */}
            <div className={navbarTopStyles.dropDown__wrapp}>
              <div className={navbarTopStyles.dropDown}>
                <div className={navbarTopStyles.dropDown__item}>
                  <NextJsActiveLink classNameProps={navbarTopStyles.dropDown__link} href={"/login"} name="Вход"/>

                </div>
                <div className={navbarTopStyles.dropDown__item}>
                  <NextJsActiveLink classNameProps={navbarTopStyles.dropDown__link} href={"/register"} name="Регистрация"/>
                </div>
              </div>
            </div>

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