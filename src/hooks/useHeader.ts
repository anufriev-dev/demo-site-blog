import { useRouter } from "next/router"
import { MouseEvent } from "react"
import { Burger, dataLinks } from "src/types"
import { DELAY_DROP_DOWN_BURGER_MENU } from "config"


export default function useHeader (props: Burger, style: any, data: dataLinks[] ) {
  const { isActiveBurger, setIsActiveBurger } = props

  const router = useRouter()

  const closeNavBar = async (e: MouseEvent<HTMLElement> ,href: string): Promise<void> => {
    if(isActiveBurger) {
      e.preventDefault()
      setIsActiveBurger(false)
      setTimeout(() => {
        router.push(href)
      },DELAY_DROP_DOWN_BURGER_MENU)
    }
  }

  const navbarProps = {
    closeNavBar,isActiveBurger,
    styles: style, data
  }

  const burgerMenuProps = {
    isActiveBurger,
    setIsActiveBurger
  }

  return { navbarProps, burgerMenuProps }
}
