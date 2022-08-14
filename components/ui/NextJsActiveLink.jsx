import Link from "next/link"
import { useRouter } from "next/router"
import trim from "../../utils/trim"


export default function NextJsActiveLink(props) {

  const {
    href,
    classNameProps,
    name,
    onClick = false
  } = props

  const { pathname } = useRouter()

  return (

    <Link href={ href }>
      <a 
        onClick={ onClick ? (e) => onClick(e,href) : null }  
        id={ trim(pathname) == href ? "activeLink" : null } 
        className={ classNameProps }
      >
        { name }
      </a>
    </Link>

  )
}
