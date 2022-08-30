/* Components 
   -------------------------------------------------- */
import Link from "next/link"
/* Utils   
-------------------------------------------------- */
import { convertDate } from "../../../utils"
/* lib components
   -------------------------------------------------- */
import cn from "classnames"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/dashboard.module.scss"


export default function Dashboard({ data, routh }) {
  const thisDate = convertDate(data.date)

  const classes = cn(indexStyles.dashboard__item, indexStyles.dashboard__info)

  return (
    <div className={indexStyles.dashboard}>
      <Link href={`/${routh}/${data.post_id}/${data.summary}`}>
        <a className={indexStyles.dashboard__item}>
          <span className={indexStyles.dashboard__link}>
            Читать дельше
          </span>
        </a>
      </Link>
      <Link href={`/category/${data.category}`}>
        <a className={indexStyles.dashboard__item}>
          <span className={indexStyles.dashboard__link}>
            {data.category}
          </span>
        </a>
      </Link>
      <span  className={classes}>{thisDate}</span>
      <span  className={classes}>Комментов: {data.comments}</span>
    </div>
  )
}