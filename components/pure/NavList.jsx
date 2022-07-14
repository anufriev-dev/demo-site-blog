import NextJsLink from "./NextJsLink"


export default function NavList({ styles, names }) {

  return (
      <ul className={ styles.nav__list }>
        {
          names.map((it,index) => (
            <li className={ styles.nav__item } key={ index }>
              <NextJsLink href={"#"} styles={styles} name={it} />
            </li>
          ))
        }
      </ul>
  )
}