import { NextJsActiveLink } from "src/components"
import { NavbarItemProps } from "src/types"
import { useContext } from "react"
import { NavbarContext } from "src/context"

function NavbarItem(props: NavbarItemProps ) {
  const { event } = useContext(NavbarContext)

  const {
    elements,className, id
  } = props

  return (
    <>
    <span id={id ? id : ""}></span>
      <NextJsActiveLink
        onClick={event} href={ elements.href }
        classNameProps={className}
        name={elements.namelink}
      />
    </>
  )
}

export default NavbarItem
