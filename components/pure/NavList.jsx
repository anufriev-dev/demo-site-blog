import NextJsActiveLink from "./NextJsLActiveLink"


export default function NavList({ styles, data }) {

  return (
    <ul className={ styles.nav__list }>
        {
          data.map((it,index) => (
            <li className={ styles.nav__item } key={ index } >
                <NextJsActiveLink href={it.href} styles={styles} name={it.namelink} />
            </li>
          ))
        }
      </ul>
  )
}