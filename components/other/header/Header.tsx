import { Container } from "@mui/system"
import { useRouter } from "next/router"
import { DELAY_DROP_DOWN_BURGER_MENU } from "../../../config"
import { useSession } from "next-auth/react"
import Image from "next/image"
/* Components 
-------------------------------------------------- */
import { Navbar, BurgerMenu, DropDownMenu, NextJsActiveLink } from "../.."
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
  const { data: session } = useSession()

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
            {session
              ?( 
              <div onClick={() => router.push("/account") } className={navbarTopStyles.user_veryfy}>
                <NextJsActiveLink href={"/account"} name={session.user.name} classNameProps={navbarTopStyles.user_name}/>
                {
                  session.user.image &&
                  <Image className={navbarTopStyles.avatar} src={session.user.image} alt="avatar" width={30} height={30} />
                }
              </div>
              ):(
              <div className={navbarTopStyles.user}>
                Гость 
              </div>)
            }
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