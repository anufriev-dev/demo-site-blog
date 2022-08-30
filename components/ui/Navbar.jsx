import { NavList } from "../../components"
import cn from "classnames"


export default function Navbar (props) {
  const { 
    data, 
    styles, 
    closeNavBar,
    isActiveBurger
  } = props

  const classBurger = cn(styles.nav, isActiveBurger ? styles.navActive : null)

  return (
    <>
      <nav  className={ classBurger }>
        <NavList closeNavBar={closeNavBar}  styles={ styles } data={ data }/>
      </nav>
    </>
  )
}
