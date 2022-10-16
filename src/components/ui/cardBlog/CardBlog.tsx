import Image from "next/image"
import { NextJsActiveLink } from "src/components"
import { ICardBlog } from "src/types"
import { convertDate } from "src/utils"
import style from "./style.module.scss"

function CardBlog(props: ICardBlog) {
  const {
    category, comments,
    date, post_id,
    src_img, summary
  } = props

  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <Image className={style.image} src={`/${process.env["NEXT_PUBLIC_UPLOAD"]}/`+ src_img || "/public/assets/blank.jpg"} alt="test" width={"1920"} height={"1080"} />
      </div>
      <p className={style.card__text}>
        <NextJsActiveLink href={`/blog/${post_id}/${summary}`} classNameProps={style.card__link} name={summary}  />
      </p>
      <div className={style.card__bar}>
      <span className={style.card__bar_date}>
          {convertDate(date)}
        </span>
        <span className={style.card__bar_category}>
          <NextJsActiveLink
            classNameProps={`${style.card__link}
            ${style.card__link_category}`}
            href={`${process.env["NEXT_PUBLIC_CATEGORY"]}${category}`} name={category}
          />
        </span>
        <span className={style.card__bar_comment}>
          ({comments})
        </span>
      </div>
    </div>
  )
}


export default CardBlog
