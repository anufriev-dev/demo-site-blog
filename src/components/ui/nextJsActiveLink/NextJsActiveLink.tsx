import Link from "next/link"
import { useRouter } from "next/router"
import { trim } from "src/utils"


export default function NextJsActiveLink(props) {
  const {
    href,name,classNameProps,
    onClick = false
  } = props

  const { pathname } = useRouter()
  
  return (

    <Link href={ href }>
      <a 
        onClick={ onClick ? (e) => onClick(e,href) : null }  
        id={ trim(pathname) == href ? "activeLink" : null } 
        className={`link ${classNameProps}` }
      >
        { name }
      </a>
    </Link>

  )
}
