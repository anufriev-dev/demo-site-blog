import NextJsLink from "./NextJsLink"


export default function NavList({ styles, data }) {

  return (
    <ul className={ styles.nav__list }>
        {
          data.map((it,index) => (
            <li className={ styles.nav__item } key={ index } >
                <NextJsLink href={it.href} styles={styles} name={it.namelink} />
            </li>
          ))
        }
      </ul>
  )
}