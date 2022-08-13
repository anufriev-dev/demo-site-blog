/* Components 
   -------------------------------------------------- */
import convertDate from "../../../utils/convertDate"
import NextJsActiveLink from "../../ui/NextJsActiveLink"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/dashboard.module.scss"


export default function Dashboard({ data, routh }) {

  const thisDate = convertDate(data.date)

  return (
    <div className={indexStyles.dashboard}>
      <span  className={indexStyles.dashboard__item}>
        <NextJsActiveLink 
          name={"Читать дельше"} 
          href={`/${routh}/${data.post_id}/${data.summary}`} 
          classNameProps={indexStyles.dashboard__link}
        />
      </span>
      <span  className={indexStyles.dashboard__item}>
        <NextJsActiveLink 
          name={data.category} 
          href={`/category/${data.category}`} 
          classNameProps={indexStyles.dashboard__link}
        />
      </span>
      <span  className={indexStyles.dashboard__item}>{thisDate}</span>
      <span  className={indexStyles.dashboard__item}>Комментов: {data.comments}</span>
    </div>
  )
}