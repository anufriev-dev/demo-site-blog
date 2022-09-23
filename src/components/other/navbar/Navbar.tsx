import { NavbarList } from "src/components"
import { NavbarProps } from "src/types"
import { useNavbar } from "src/hooks"

export default function Navbar (props: NavbarProps) {
  const { classBurger, closeNavBar, data, styles } = useNavbar(props)

  return (
    <nav  className={`navbar ${classBurger}`}>
      <NavbarList 
        closeNavBar={closeNavBar}
        styles={ styles } data={ data }
      />
    </nav>
  )
}
