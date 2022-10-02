import style from "./style.module.scss"

interface IRow {
  title: string,
  payload: string,
  bg: string,
  color: string,
  children?: any
}

function Row(props: IRow) {
  const { title, payload, bg, color, children } = props

  return (
    <div className={style.row} style={{background: bg, color }} >
      <span className={`${style.cell} ${style["cell--heading"]}`}>{title}</span>
      <span className={style.cell}>{payload}</span>
      {children}
    </div>
  )
}

export default Row
