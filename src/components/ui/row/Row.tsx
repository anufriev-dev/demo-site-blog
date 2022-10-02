import NextLink from "../nextLink"
import style from "./style.module.scss"

interface IRow {
  title: string,
  payload?: string,
  bg: string,
  color: string,
  children?: any,
  onClick?(e): void,
  href?: string,
  textLink?: string
}

function Row(props: IRow) {
  const { title, payload, bg, color, onClick, href, textLink } = props

  return (
    <div className={style.row} style={{background: bg, color }} >
      <span className={`${style.cell} ${style["cell--heading"]}`}>{title}</span>
      {
        !!payload &&
        <span className={style.cell}>{payload}</span>
      }
      {
        !!href &&
        <NextLink onClick={onClick} href={href} text={textLink} className={style.link} />
      }
    </div>
  )
}

export default Row
