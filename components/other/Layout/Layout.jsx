import Header from "../Header/Header"
import Footer from "../footer/footer"


export default function Layout({ children }) {
  return (
    <>

      <Header />

        <main>{ children }</main>

      <Footer />
    
    </>

  )
}

