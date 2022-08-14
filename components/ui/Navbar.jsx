import NavList from "./NavList"
import cn from "classnames"


export default function Navbar ({ styles, data, isActiveBurger, closeNavBar }) {


  const classBurger = cn(styles.nav, isActiveBurger ? styles.navActive : null)

  return (
    <>
      <nav  className={ classBurger }>
          <NavList closeNavBar={closeNavBar}  styles={ styles } data={ data }/>
      </nav>
    </>
  )
}
