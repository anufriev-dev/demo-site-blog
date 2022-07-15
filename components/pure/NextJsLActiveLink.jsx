import Link from "next/link"
import { useRouter } from "next/router"
import trim from "../../utils/trim"


export default function NextJsActiveLink({ href, styles, name }) {

  const { pathname } = useRouter()

  return (

    <Link href={ href }>
      <a id={ trim(pathname) == href ? "active" : null } className={ styles.link }>{ name }</a>
    </Link>

  )
}