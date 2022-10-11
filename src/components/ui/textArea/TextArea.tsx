import { ITextArea } from "src/types"
import style from "./style.module.scss"



export default function TextArea({
  id,
  state,
  disabled,
  setState,
  placeholder,
}: ITextArea) {
  
  return (
    <>
      <textarea
        id={id}
        value={state}
        disabled={disabled}
        placeholder={placeholder}
        className={style.textArea}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  )
}

