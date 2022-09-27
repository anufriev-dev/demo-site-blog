import style from "./style.module.scss"

function Row(props) {
  const { title, payload, bg, color } = props

  return (
    <div className={style.row} style={{background: bg, color }} >
      <span className={`${style.cell} ${style["cell--heading"]}`}>{title}</span><span className={style.cell}>{payload}</span>
    </div>
  )
}

export default Row