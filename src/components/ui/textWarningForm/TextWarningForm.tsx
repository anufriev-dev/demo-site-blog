import style from "./style.module.scss"

const TextWarningForm = ({ children }) => (
  <span className={style.warning}>{ children }</span>
)

export default TextWarningForm
