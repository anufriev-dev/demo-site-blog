import style from "./style.module.scss"

export interface ISearchUniversal {
  setState(e: string): void,
  state: string,
}

function SearchUniversal(props: ISearchUniversal) {
  const { setState, state } = props

  return (
    <div>
      <label className={style.lable} htmlFor="search">Поиск</label>
      <input
        id="search"
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default SearchUniversal
