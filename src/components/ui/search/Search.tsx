import { useSearch } from "../../../hooks"
import cn from "classnames"
import style from "./style.module.scss"
  
export default function Search(props) {
  const { url } = props
  const { search, setSearch, handlerClick } = useSearch(url)

  const classes = cn(style?.search__td, style?.search__td2)

  return (
    <>
      <br />
      <table className={style?.search__form}>
        <tbody>
          <tr className={style?.search__tr}>
            <td className={style?.search__td}>
              <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={style?.search__input}
              placeholder="Найдется всё"
            />
            </td>
            <td className={classes}>
              <button 
                className={style?.search__btn} 
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
