import style from "./style.module.scss"
import { Burger } from "src/types"
import { useBurgerMenu } from "src/hooks"

export default function BurgerMenu(props: Burger) {
  const { 
    classBurger, handler
  } = useBurgerMenu(props, style)

  return (
    <button onClick={ handler } className={ classBurger }>
      <span className={ style.burger__line }></span>
    </button>
  )
}
