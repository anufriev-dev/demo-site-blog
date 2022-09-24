import { convertDate } from "src/utils"
import style from "./style.module.scss"


export default function Comment(props) {
  const { comment } = props
  const thisDate = convertDate(comment.date)
  return (

    <div className={style?.comment}>
      <div className={style?.comment__author}>{ comment.author }</div>
      <div className={style?.comment__date}>{ thisDate }</div>
      <div className={style?.comment__text}>{ comment.text }</div>
      <hr />
    </div>

  )
}
