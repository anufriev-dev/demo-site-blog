import { NavbarItem } from "src/components"
import { useContext } from "react"
import { NavbarContext } from "src/context"



export default function NavList() {
  const { data, styles } = useContext(NavbarContext)

  return (
  <ul className={`navbar__list ${styles?.nav__list || ''}`}>
    {data && data.length > 0 ? (
      data.map((it) => (
        <li className={`navbar__item ${styles?.nav__item || ''}`} key={it.namelink}>
          <NavbarItem
            elements={it}
            id={it.id}
            className={`navbar__link ${styles?.nav__link || ''}`}
          />
        </li>
      ))
    ) : (
      <p>Нет данных</p>
    )}
  </ul>
  )
}
