/* Components 
   -------------------------------------------------- */
import { NextJsActiveLink, Dashboard } from "src/components"
/* Utils   
-------------------------------------------------- */
import { toSliceText } from "src/utils"
/* lib components   
-------------------------------------------------- */
import Image from "next/image"
import { DemoCardBlogProps } from "src/types"




export default function DemoCardBlog(props: DemoCardBlogProps ) {
  const { styles, dataBlog, routherType } = props
  
  return (
  <>
    { 
      dataBlog.map((item) => (
        <div key={item.post_id} className={styles.wrapp}>
          <h2 className={styles.title}>
            <NextJsActiveLink 
              classNameProps={styles.cardBlog__link} 
              href={`/${routherType}/${item.post_id}/${item.summary}`} 
              name={item.summary}
            />
          </h2>
          <div className={styles.cardBlog}>
            <div className={styles.cardBlog__imgContainer}>
              <Image  width={1920} height={1080} className={styles.cardBlog__img} src={item.src_img} alt={item.summary} />
            </div>
            <p className={styles.cardBlog__text}>{ toSliceText(item.text) }</p>
          </div >
            <Dashboard  data={item} routh={routherType}/>
        </div> 
      ))
    }
  </>

  )
}
