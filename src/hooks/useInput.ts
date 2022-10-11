import { InputLableProps } from "src/types";


export default function useInput(props: InputLableProps) {
  const { id, setState, state, text, disabled } = props

  const inputProps = {
    id, setState, state, disabled
  }
  const lableProps = {
    id, text,
  }

  return { inputProps, lableProps }
}
