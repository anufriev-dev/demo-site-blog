import Link from "next/link"
import { MouseEvent } from "react"

interface INextLink {
  href: string,
  text: string,
  className?: string,
  onClick?(e): void
}

function NextLink(props: INextLink ) {
  const { href, text, className, onClick } = props

  return (
    <Link href={href}>
      <a onClick={onClick} className={`nextLink ${className}`}>{ text }</a>
    </Link>
  )
}

export default NextLink
