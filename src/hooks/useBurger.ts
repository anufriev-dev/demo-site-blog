import { useEffect, useState } from "react"


function useBurger(initialState: boolean) {
  const [isActiveBurger,setIsActiveBurger] = useState<boolean>(initialState)
  // остановить скролл при открытии выпадающего меню
  useEffect(() => {
    isActiveBurger
      ? document?.body.classList.add("stopScroll")
      : document?.body.classList.remove("stopScroll")
    return () => document?.body.classList.remove("stopScroll")
  },[isActiveBurger])
  return { isActiveBurger,setIsActiveBurger }
}

export default useBurger
