import { NavbarItem } from "src/components"
import { NavListProps } from "src/types"


export default function NavList(props: NavListProps) {
  const { 
    data, styles, closeNavBar
  } = props

  return (
    <ul className={`navbar__list ${styles?.nav__list}`}>
        {data.map((it) => (
          <li className={`navbar__item ${styles?.nav__item}`} key={ it.namelink } >
            <NavbarItem
              event={closeNavBar} elements={it}
              className={`navbar__link ${styles?.nav__link}`}
            />
          </li>
        ))}
    </ul>
  )
}
