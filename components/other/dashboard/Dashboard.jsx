import NextJsActiveLink from "../../ui/NextJsActiveLink"

import indexStyles from "./styles/dashboard.module.scss"


export default function Dashboard({ data, routh }) {
  return (
    <div className={indexStyles.dashboard}>
      <span  className={indexStyles.dashboard__item}>
        <NextJsActiveLink name={"Читать дельше"} href={`/${routh}/${data.post_id}/${data.summary}`} classNameProps={indexStyles.dashboard__link} />
      </span>
      <span  className={indexStyles.dashboard__item}>
        <NextJsActiveLink name={data.category} href={`/category/${data.category}`} classNameProps={indexStyles.dashboard__link}/>
      </span>
      <span  className={indexStyles.dashboard__item}>
        {data.date}
      </span>
      <span  className={indexStyles.dashboard__item}>
        Коментов: {data.comments}
      </span>
    </div>
  )
}