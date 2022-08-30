import { useEffect, useState } from "react"


function useBurger(initialState) {
  const [isActiveBurger,setIsActiveBurger] = useState(initialState)
  // остановить скролл при открытии выпадающего меню
  useEffect(() => {
    isActiveBurger
      ? document?.body.classList.add("stopScroll")
      : document?.body.classList.remove("stopScroll")
    return () => document?.body.classList.remove("stopScroll")
  },[isActiveBurger])
  return [isActiveBurger,setIsActiveBurger]
}

export default useBurger
