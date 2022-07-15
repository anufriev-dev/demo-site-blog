import NavList from "./NavList"


export default function Navbar ({ styles, data }) {
  return (
    <nav className={styles.nav}>
        <NavList styles={styles} data={data}/>
    </nav>
  )
}
