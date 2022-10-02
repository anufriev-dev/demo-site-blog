import { NextJsActiveLink } from "src/components"
import { NavbarItemProps } from "src/types"

function NavbarItem(props: NavbarItemProps ) {
  const {
    event, elements,className
  } = props

  return (
    <NextJsActiveLink
      onClick={event} href={ elements.href }
      classNameProps={className}
      name={elements.namelink}
    />
  )
}

export default NavbarItem
