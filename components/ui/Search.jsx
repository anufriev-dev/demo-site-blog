import { useState } from "react"
import { useRouter } from "next/router"
import cn from "classnames"
  
export default function Search({ styles, url }) {

  const router = useRouter()

  const [serch, setSerch] = useState("")


  const handlerClick = async () => {
    router.push(`${url ? url : "/"}${serch}`)
    setSerch("")
  }

  const classes = cn(styles?.search__td, styles?.search__td2)


  return (
    <>
      <br />
      <table className={styles?.search__form}>
        <tbody>
          <tr className={styles?.search__tr}>
            <td className={styles?.search__td}>
              <input 
              type="text"
              value={serch}
              onChange={(e) => setSerch(e.target.value)}
              className={styles?.search__input}
              placeholder="Найдется всё"
            />
            </td>
            <td className={classes}>
              <button 
                className={styles?.search__btn} 
                onClick={ handlerClick }
              >
                Найти
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
    </>   
  )
}
