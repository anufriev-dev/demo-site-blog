import { InputLableProps } from "src/types";


export default function useInput(props: InputLableProps) {
  const { id, setState, state, text } = props

  const inputProps = {
    id, setState, state
  }
  const lableProps = {
    id, text
  }

  return { inputProps, lableProps }
}
