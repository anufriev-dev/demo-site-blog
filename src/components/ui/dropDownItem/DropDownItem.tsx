import { NextJsActiveLink } from "src/components"


function DropDownItem(props: any) {
  const { style, href, name  } = props

  return (
  <div className={style.dropDown__item}>
    <NextJsActiveLink
      classNameProps={style.dropDown__link}
      href={href} name={name}
    />
  </div>
  )
}

export default DropDownItem
