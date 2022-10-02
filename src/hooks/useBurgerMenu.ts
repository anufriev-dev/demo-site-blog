import { Burger } from "src/types"
import cn from "classnames"


export default function useBurgerMenu(props: Burger, style: any) {
  const {
    isActiveBurger,
    setIsActiveBurger
  } = props

  const classBurger = cn(
    style.burger,
    isActiveBurger ? style.burgerActive : null
  )

  const handler = () => {
    return setIsActiveBurger(!isActiveBurger)
  }

  return { handler, classBurger }
}
