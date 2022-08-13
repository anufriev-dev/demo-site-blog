import { useState, useEffect } from "react"
import resize from "../../../utils/resize"
import { SIZE_WINDOW_DROP_DOWN_BURGER_MENU } from "../../../config/config"
/* Components 
   -------------------------------------------------- */
import Header from "../header"
import Footer from "../footer"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"


export default function Layout({ children }) {

  // состояние бургер меню -> активно || !активно
  const [isActiveBurger,setIsActiveBurger] = useBurger(false)
  // управление автоматическим закрытием бургер меню
  useResize(setIsActiveBurger,SIZE_WINDOW_DROP_DOWN_BURGER_MENU)

  return (
    <div onClick={() => setIsActiveBurger(false)}>
      {/* Шапка */}
      <Header 
        isActiveBurger={ isActiveBurger } 
        setIsActiveBurger={ setIsActiveBurger } 
      />
      {/* Содержимое */}
      <main className={ isActiveBurger ? indexStyles.mainTransform : null }>
        { children }
      </main>
      {/* Подвал */}
      <Footer />

    </div>
  )
}


// Хуки

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

// закрыть выпадающее меню при ресайзе
// если ширина экрана выйдет за пределы максимальной, закрыть бург. меню
function useResize(setState,maxSize) {
  useEffect(() => {
    window?.addEventListener("resize", (event) => resize(event, setState, maxSize))
    return () => window?.removeEventListener("resize", resize)
  })
}