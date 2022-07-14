import Header from "../Header/Header"
import Footer from "../footer/footer"

import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <>

      <Header />

        <main>{ children }</main>

      <Footer />
    
    </>

  )
}

