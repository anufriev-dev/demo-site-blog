import { InputProps } from "src/types"

function Input(props: InputProps) {
  const {
    id,setState,state, disabled
  } = props

  return (
  <input
    disabled={disabled}
    onChange={(e) => setState(e.target.value)}
    className="input"
    id={id.toString()} type="text" value={state}
  />
  )
}

export default Input
