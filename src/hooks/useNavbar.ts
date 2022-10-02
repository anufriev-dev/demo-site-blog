import classNames from "classnames"
import { NavbarProps } from "src/types"


export default function useNavbar (props: NavbarProps) {
  const {
    data, styles, closeNavBar,
    isActiveBurger
  } = props

  const classBurger = classNames(
    styles.nav, isActiveBurger && styles.navActive
  )

  return { classBurger, closeNavBar, data, styles }
}
