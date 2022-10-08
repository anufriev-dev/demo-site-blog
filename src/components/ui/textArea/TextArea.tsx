import style from "./style.module.scss"

interface ITextArea {
  state,
  setState,
  placeholder?,
  id?
}

export default function TextArea(props: ITextArea) {
  const {
    state,
    setState,
    placeholder,
    id
  } = props

  return (
    <>
      <textarea
        id={id}
        placeholder={placeholder}
        className={style.textArea}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  )
}

