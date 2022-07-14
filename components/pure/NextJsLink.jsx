import Link from "next/link"

export default function NextJsLink(props) {
  return (

    <Link href={props.href}>
      <a className={props.styles.link}>{ props.name }</a>
    </Link>

  )
}