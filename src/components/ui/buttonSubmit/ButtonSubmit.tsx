import { MouseEvent } from "react"

interface IuttonSubmit {
  event: any,
  text: string, 
  className?: string, 
  width?: string
}

function ButtonSubmit(props: IuttonSubmit ) {
  const { event, text, className, width } = props

  return (
  <button onClick={event} style={{width}} className={`buttonSubmit ${className}`}>
      { text }
  </button>
  )
}

export default ButtonSubmit