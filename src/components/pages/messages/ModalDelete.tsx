import { Modal, ButtonSubmit } from "src/components"
import { useMessages, useMessagesDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { Message } from "src/http"
import style from "./style.module.scss"


export default function ModalDelete() {
  const { refreshData } = useRefreshData()
  const { IdMesssage, modalOnActiveDelete } = useMessages()
  const dispatch = useMessagesDispatch()
  
  async function _delete() {
    const result = await Message.delete(IdMesssage)

    if(result === "OK") {
      dispatch({ type: "send_delete_success" })
      refreshData()
      return
    }
    dispatch({ type: "send_delete_error" })
  }

  return (
  <Modal active={modalOnActiveDelete}
     onActive={(value) => dispatch({ type: "delete_active", value })} 
    >
    <p className="text">Удалить сообщение c id = &#34;{IdMesssage}&#34;?</p>
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => dispatch({ type: "modal_close" })} text="Отмена" />
      <ButtonSubmit event={_delete} text="Удалить" />
    </div>
  </Modal>
  )
}
