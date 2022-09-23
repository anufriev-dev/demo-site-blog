import Link from "next/link"
import style from "./style.module.scss"


function DashboardLink(props:{href: string, text: string}) {
  const { href, text } = props

  return (
    <Link href={href}>
      <a className={style.item}>
        <span className={style.link}>
          { text }
        </span>
      </a>
    </Link>
  )
}

export default DashboardLink