import Link from "next/link"

/**
 * classes in scss
 * 
 * .nav {
 *
 *     &__ul {
 *
 *     }
 *     &__item {
 *  
 *     }
 *     &__link {
 *
 *     }
 * }
 * 
 */
export default function NavList({ names, styles }) {

  return (
    <nav className={ styles.nav }>
      <ul className={ styles.nav__ul }>
        {
          names.map((it,index) => (
            <li className={ styles.nav__item } key={ index }>
              <Link href="#">
                <a className={ styles.nav__link } >{ it }</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}