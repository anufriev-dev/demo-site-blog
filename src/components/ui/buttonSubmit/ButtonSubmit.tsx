import { MouseEvent } from "react"
import { IuttonSubmit } from "src/types"



function ButtonSubmit(props: IuttonSubmit ) {
  const { event, text, className, width } = props

  return (
  <button onClick={event} style={{width}} className={`buttonSubmit ${className}`}>
      { text }
  </button>
  )
}

export default ButtonSubmit
