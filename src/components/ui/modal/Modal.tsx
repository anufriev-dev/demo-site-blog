import { IModal } from "src/types"
import style from "./style.module.scss"



function Modal(props: IModal) {
  const { active, setActive, children } = props

  return (
    <div onClick={(e) => setActive(!active)} className={active ? `${style.modal} ${style.active}` : style.modal}>
      <div onClick={(e) => e.stopPropagation()} className={active ? `${style.content} ${style.active}` : style.content}>
          { children }
      </div>
    </div>
  )
}

export default Modal
