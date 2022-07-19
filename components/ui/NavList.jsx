import NextJsActiveLink from "./NextJsActiveLink"


export default function NavList({ styles, data, closeNavBar }) {

  if(!data) return <h1>Loading...</h1>
  
  return (
    <ul className={ styles.nav__list }>
        {
          data.map((it,index) => (
            <li className={ styles.nav__item } key={ index } >
                <NextJsActiveLink onClick={closeNavBar} href={ it.href } classNameProps={ styles.nav__link } name={ it.namelink } />
            </li>
          ))
        }
    </ul>
  )
}