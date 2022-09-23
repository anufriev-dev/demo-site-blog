import { Container } from "@mui/system"
import { Navbar, BurgerMenu, SignInHeader, DropDownMenu } from "src/components"
import { Burger } from "src/types"
import { useHeader } from "src/hooks"

import indexStyles from "./index.module.scss"
import { dataLinks } from "fake_database"



export default function Header(props: Burger) {

  const { 
    navbarProps, burgerMenuProps
  } = useHeader(props, indexStyles, dataLinks)

  return (
    <header className={ indexStyles.header }>
      <div className={ indexStyles.navbarWrap }>
        <Container>
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={ indexStyles.reverseWrap } 
          >
            <Navbar {...navbarProps} />

            <SignInHeader className={indexStyles.user} />
            <DropDownMenu styles={indexStyles} />

            <BurgerMenu {...burgerMenuProps}/>
          </div>
        </Container>
      </div>
    </header>
  )
}
