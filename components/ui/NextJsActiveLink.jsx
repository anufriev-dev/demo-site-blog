import Link from "next/link"
import { useRouter } from "next/router"
import trim from "../../utils/trim"
import cn from "classnames"


export default function NextJsActiveLink({ href, styles, name }) {

  const { pathname } = useRouter()

  const className = cn(styles.link, styles.nav__link)

  return (

    <Link href={ href }>
      <a id={ trim(pathname) == href ? "activeLink" : null } className={ className }>{ name }</a>
    </Link>

  )
}