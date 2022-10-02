import { LabelProps } from "src/types"


function Label(props: LabelProps) {
  const { id, text } = props

  return (
    <label
      className="inputLabel"
      htmlFor={id.toString()}>
        { text }
    </label>
  )
}

export default Label
