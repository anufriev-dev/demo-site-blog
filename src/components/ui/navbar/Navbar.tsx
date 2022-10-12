import { NavbarList } from "src/components"
import { NavbarProps } from "src/types"
import { useNavbar } from "src/hooks"
import { NavbarProvider } from "src/context"



export default function Navbar (props: NavbarProps) {
  const { classBurger, closeNavBar, data, styles } = useNavbar(props)
  

  return (
    <nav  className={`navbar ${classBurger}`}>
      <NavbarProvider data={{ event: closeNavBar, styles, data }}>
        <NavbarList />
      </NavbarProvider>
    </nav>
  )
}
