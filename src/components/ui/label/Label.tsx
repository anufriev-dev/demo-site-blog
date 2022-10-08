import { LabelProps } from "src/types"


function Label(props: LabelProps) {
  const { id, text, classNames } = props

  return (
    <label
      className={`inputLabel ${classNames}`}
      htmlFor={id.toString()}>
        { text }
    </label>
  )
}

export default Label
