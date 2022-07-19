import NextJsActiveLink from "./NextJsActiveLink"


export default function Dashboard({ styles, data, routh }) {
  return (
    <div className={styles.dashboard}>
      <span  className={styles.dashboard__item}>
        <NextJsActiveLink name={"Читать дельше"} href={`${routh}${data.postName}`} classNameProps={styles.dashboard__link} />
      </span>
      <span  className={styles.dashboard__item}>
        <NextJsActiveLink name={data.category} href={data.categoryhref} classNameProps={styles.dashboard__link}/>
      </span>
      <span  className={styles.dashboard__item}>
        {data.date}
      </span>
      <span  className={styles.dashboard__item}>
        Коментов: {data.comments}
      </span>
    </div>
  )
}