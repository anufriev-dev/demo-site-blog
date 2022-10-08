import { NextJsActiveLink, Dashboard } from "src/components"
import { toSliceText } from "src/utils"
import Image from "next/image"
import { DemoCardBlogProps } from "src/types"

import styles from "./style.module.scss"


export default function DemoCardBlog(props: DemoCardBlogProps ) {
  const { dataBlog, routherType } = props

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
              <Image  width={1920} height={1080} 
                className={styles.cardBlog__img} src={"/uploads/"+ item.src_img || "/public/assets/blank.jpg" } 
                alt={item.summary} 
              />
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
