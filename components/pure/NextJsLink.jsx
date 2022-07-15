import Link from "next/link"
import { useRouter } from "next/router"


export default function NextJsLink({ href, styles, name }) {

  const routher = useRouter()

  return (

    <Link href={ href }>
      <a id={ routher.pathname == href ? "active" : null } className={ styles.link }>{ name }</a>
    </Link>

  )
}