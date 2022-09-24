import { useLayout } from "src/hooks"
import { SIZE_WINDOW_DROP_DOWN_BURGER_MENU } from "config"
import { Header, Footer } from "src/components"
import Head from "next/head"
import style from "./style.module.scss"


export default function Layout({ children }) {
  const layout = useLayout(SIZE_WINDOW_DROP_DOWN_BURGER_MENU)
  const { isActiveBurger, setIsActiveBurger } = layout

  const classMain = isActiveBurger 
    ? style.mainTransform 
    : null

  return (
    <>
      <Head>
        <link 
          rel="shortcut icon" 
          href={"/assets/favicon.ico"} 
          type="image/png" 
        />
      </Head>

      <div onClick={() => setIsActiveBurger(false)}>
        <Header {...layout}/>
        <main className={classMain} >
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}