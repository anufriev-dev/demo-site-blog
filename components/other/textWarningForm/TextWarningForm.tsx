import indexStyle from "./styles/index.module.scss"

export default function TextWarningForm({ children }) {
  return (
    <span className={indexStyle.warning}>{ children }</span>
  )
}