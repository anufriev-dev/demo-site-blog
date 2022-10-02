import { convertDate } from "src/utils"
import cn from "classnames"
import { DashboardLink } from "src/components"

import indexStyles from "./style.module.scss"
import { DashboardProps } from "src/types"


export default function Dashboard(props: DashboardProps) {
  const { data, routh } = props
  const thisDate = convertDate(data.date)

  const classes = cn(indexStyles.dashboard__item, indexStyles.dashboard__info)

  return (
    <div className={indexStyles.dashboard}>
      <DashboardLink
        href={`/${routh}/${data.post_id}/${data.summary}`}
        text="Читать дельше"
      />
      <DashboardLink
        href={`/category/${data.category}`}
        text={data.category}
      />
      <span  className={classes}>{thisDate}</span>
      <span  className={classes}>Комментов: {data.comments}</span>
    </div>
  )
}
