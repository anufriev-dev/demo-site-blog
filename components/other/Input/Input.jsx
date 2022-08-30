import indexStyles from "./scss/index.module.scss"

export default function Input(props) {
  const {
    id,
    text,
    setState,
    state
  } = props

  return (
    <div className={indexStyles.inputWrapp}>
      <label className={indexStyles.inputLabel} htmlFor={id}>{ text }</label>
      <input 
        value={state}
        onChange={(e) => setState(e.target.value)} 
        className={indexStyles.input}
        id={id}
        type="text"
      />
    </div>
  )
}
