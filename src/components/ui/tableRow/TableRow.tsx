import style from "./style.module.scss"


function TableRow(props) {
  const { children } = props

  return (
    <tr className={style.tableRow}>
      { children }
    </tr>
  )
}

export default TableRow
