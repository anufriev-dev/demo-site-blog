import { useSearch } from "../hooks"
import cn from "classnames"
  
export default function Search(props) {
  const { styles, url } = props
  const { search, setSearch, handlerClick } = useSearch(url)

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
