import "./layout.module.scss"
import Navbar from "../Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <>
        <Navbar />
        <main>{ children }</main>
    
    </>

  )
}

