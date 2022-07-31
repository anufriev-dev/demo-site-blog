// import { useEffect, useState } from "react"
// import { getAmountComment } from "../../../http/blogApi"
import NextJsActiveLink from "./NextJsActiveLink"
import Dashboard from "../other/dashboard/Dashboard"
import toSliceText from "../../utils/toSliceText.js"
import Image from "next/image"



export default function DemoCardBlog({ styles, dataBlog, routherType }) {

  // const [amountComments, setAmountComments] = useState("")

  // useEffect(() => {
  //   setAmountComments(getAmountComment)
  // },[])


  if(!dataBlog) return <h1>Loading...</h1>

  return (
  <>
    { 
      dataBlog.map((item,index) => (
        <div key={index} className={styles.wrapp}>
          <h2 className={styles.title}>
            <NextJsActiveLink 
              classNameProps={styles.cardBlog__link} 
              href={`/${routherType}/${item.post_id}/${item.summary}`} 
              name={item.summary}
            />
          </h2>
          <div className={styles.cardBlog}>
            <div className={styles.cardBlog__imgContainer}>
              <Image width={1920} height={1080} className={styles.cardBlog__img} src={item.src_img} alt={item.summary} />
            </div>
            <p className={styles.cardBlog__text}>{ toSliceText(item.text) }</p>
          </div>
            <Dashboard  data={item} routh={routherType}/>
        </div> 
      ))
    }
  </>

  )
}