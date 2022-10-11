import { NavbarList } from "src/components"
import { NavbarProps } from "src/types"
import { useNavbar } from "src/hooks"
import { NavbarContext } from "src/context"



export default function Navbar (props: NavbarProps) {
  const { classBurger, closeNavBar, data, styles } = useNavbar(props)

  return (
    <nav  className={`navbar ${classBurger}`}>
      <NavbarContext.Provider value={{ event: closeNavBar, styles, data }}>
        <NavbarList />
      </NavbarContext.Provider>
    </nav>
  )
}
