import Image from "next/image"
import Link from "next/link"
import { PostDB } from "src/types"

import { convertDate } from "src/utils"
import style from "./style.module.scss"


export default function PostItem(props: {item: PostDB} ) {
  const { item } = props
  const date = convertDate(item.date)
    
  return (
    <div className={style.post}>
        <h2 className={style.post__title}>{item.summary}</h2>
        <div className={style.post__wrapp}>
          <div className={style.post__subline}>
            <span className={style.post__time}>{date}</span>
            <Link href={`/category/${item.category}`}>
              <a className={style.post__category__link}>{item.category}</a>
            </Link>
          </div>
          <div className={style.post__img__wrapp}>
            <Image className={style.post__img} src={`/${process.env["NEXT_PUBLIC_UPLOAD"]}/${item.src_img}`} alt="" width={1920} height={1080} />
          </div>
          <p className={style.post__text}>{item.text}</p>
        </div>
        <hr/>
    </div>
  )
}
