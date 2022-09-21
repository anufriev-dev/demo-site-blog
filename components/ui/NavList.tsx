import { NextJsActiveLink } from "components"

export default function NavList(props) {
  const { 
    data, 
    styles, 
    closeNavBar 
  } = props

  return (
    <ul className={ styles?.nav__list }>
        {
          data.map((it,index) => (
            <li className={ styles?.nav__item } key={ index } >
              <NextJsActiveLink 
                onClick={closeNavBar} 
                href={ it.href } 
                classNameProps={ styles?.nav__link } 
                name={ it.namelink } 
              />
            </li>
          ))
        }
    </ul>
  )
}
