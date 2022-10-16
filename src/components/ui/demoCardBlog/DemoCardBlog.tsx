import { NextJsActiveLink, Dashboard } from "src/components"
import { toSliceText } from "src/utils"
import Image from "next/image"
import { DemoCardBlogProps } from "src/types"
import { useMemo } from "react"

import styles from "./style.module.scss"


export default function DemoCardBlog(props: DemoCardBlogProps ) {
  const { dataBlog, routherType } = props
  
  const data = useMemo(() => dataBlog.map((item) => (
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
            className={styles.cardBlog__img} src={`/${process.env["NEXT_PUBLIC_UPLOAD"]}/`+ item.src_img || "/assets/blank.jpg" } 
            alt={item.summary} 
          />
        </div>
        <p className={styles.cardBlog__text}>{ toSliceText(item.text) }</p>
      </div >
        <Dashboard  data={item} routh={routherType}/>
    </div>
  )),[dataBlog,routherType])

  return (
  <>
    {data}
  </>

  )
}
