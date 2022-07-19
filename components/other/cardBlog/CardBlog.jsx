import NextJsActiveLink from "../../ui/NextJsActiveLink"
import Dashboard from "../../ui/Dashboard"
import shorten from "../../../utils/shorten"


/* styles
   -------------------------------------------------- */
import dashboardStyles from "./styles/dashboard.module.scss"



export default function CardBlog({ styles, dataBlog }) {

  // useEffect(() => {
  //   const img = document?.querySelectorAll(`#${}`)
  //   img?.width < 500
  //     ? img?.classList.add(styles.img_float)
  //     : img?.classList.remove(styles.img_float)
  // },[])


  return (
    <>
      {
        dataBlog.map((item,index) => (
          <div key={index} className={styles.wrapp}>
            <h2 className={styles.title}>
              <NextJsActiveLink classNameProps={styles.cardBlog__link} href={"#"} name={item.title}/>
            </h2>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlog__imgContainer}>
                <img className={styles.cardBlog__img} src={item.src} alt={item.postName} />
              </div>
              <p className={styles.cardBlog__text}>{shorten(item.text)}</p>
            </div>
              <Dashboard styles={dashboardStyles} data={item} routh={"/blog/"}/>
        </div> 
        ))
      }
    </>

  )
}