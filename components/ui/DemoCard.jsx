import NextJsActiveLink from "./NextJsActiveLink"
import Dashboard from "../other/dashboard/Dashboard"
import shorten from "../../utils/shorten"



export default function DemoCardBlog({ styles, dataBlog, routherType }) {

  return (
  <>
    {
      dataBlog.map((item,index) => (
        <div key={index} className={styles.wrapp}>
          <h2 className={styles.title}>
            <NextJsActiveLink 
              classNameProps={styles.cardBlog__link} 
              href={`/${routherType}/${item.id}/${item.postName}`} 
              name={item.title}
            />
          </h2>
          <div className={styles.cardBlog}>
            <div className={styles.cardBlog__imgContainer}>
              <img className={styles.cardBlog__img} src={item.src} alt={item.postName} />
            </div>
            <p className={styles.cardBlog__text}>{shorten(item.text)}</p>
          </div>
            <Dashboard data={item} routh={routherType}/>
        </div> 
      ))
    }
  </>

  )
}