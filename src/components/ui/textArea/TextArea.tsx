import style from "./style.module.scss"

export default function TextArea(props) {
  const {
    state,
    setState,
    placeholder
  } = props

  return (
    <>
      <textarea
        placeholder={placeholder}
        className={style.textArea}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  )
}

