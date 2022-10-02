
export interface ISearchUniversal {
  setState(e: string): void,
  state: string,
}

function SearchUniversal(props: ISearchUniversal) {
  const { setState, state } = props

  return (
    <>
      <input 
        type="text"
        value={state}
        onChange={(e) => {
        }}
      />
    </>
  )
}

export default SearchUniversal
