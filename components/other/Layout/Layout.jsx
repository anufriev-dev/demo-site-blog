import { useState, useEffect } from "react"
import resize from "../../../utils/resize"
import { SIZE_WINDOW_DROP_DOWN_BURGER_MENU } from "../../../config/config"

/* Components */
import Header from "../Header/Header"
import Footer from "../footer/footer"

/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"



export default function Layout({ children }) {

  const [isActiveBurger,setIsActiveBurger] = useState(false)
 
  // закрыть выпадающее меню при ресайзе
  useEffect(() => {
    window.addEventListener("resize", (event) => resize(event, setIsActiveBurger, SIZE_WINDOW_DROP_DOWN_BURGER_MENU))
    return () => window.removeEventListener("resize", resize)
  })

  // остановить скролл при открытии выпадающего меню
  useEffect(() => {
    isActiveBurger
      ? document.body.classList.add("stopScroll")
      : document.body.classList.remove("stopScroll")
    return () => document.body.classList.remove("stopScroll")
  },[isActiveBurger])

  return (
    <div onClick={() => setIsActiveBurger(false)}>

      <Header 
        isActiveBurger={ isActiveBurger } 
        setIsActiveBurger={ setIsActiveBurger } 
        />

        <main className={ isActiveBurger ? indexStyles.mainTransform : null }>{ children }</main>

      <Footer />

    </div>
  )
}