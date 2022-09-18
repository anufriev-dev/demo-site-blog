import { useBurger, useResize } from "../../hooks"
import { SIZE_WINDOW_DROP_DOWN_BURGER_MENU } from "../../../config"

/* Components 
   -------------------------------------------------- */
import { Header, Footer } from "../../../components"
import Head from "next/head"
/* styles
   -------------------------------------------------- */
import indexStyles from "./styles/index.module.scss"


export default function Layout({ children }) {

  // состояние бургер меню -> активно || !активно
  const [isActiveBurger,setIsActiveBurger] = useBurger(false)
  // управление автоматическим закрытием бургер меню
  useResize(setIsActiveBurger,SIZE_WINDOW_DROP_DOWN_BURGER_MENU)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={"/assets/favicon.ico"} type="image/png" />
      </Head>
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
    </>
  )
}