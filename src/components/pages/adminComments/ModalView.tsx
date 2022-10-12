import { Modal, ButtonSubmit } from "src/components"
import { useAdminComments, useAdminCommentsDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { BlogApi } from "src/http"

import style from "./style.module.scss"


export default function ModalView () {
  const { modalData, modalDelete } = useAdminComments()
  const dispatch = useAdminCommentsDispatch()
  const { refreshData } = useRefreshData()

  async function handleDelete() {
    const result = await BlogApi.deleteComment(modalData.id)
    result === "OK"
      ? dispatch({ type: "fetch_delete_success" }) 
      : dispatch({ type: "fetch_delete_failed" })
    refreshData()
  }

  return (
    <>
      <Modal active={modalDelete} onActive={() => dispatch({ type: "modal_delete_close" })}>
         <p className="text">Удалить комментарий id = {modalData.id}</p> 
        <div className={style.buttons}>
          <ButtonSubmit text="Отмена"  event={() => dispatch({ type: "modal_delete_close" })}/>
          <ButtonSubmit text="Удалить" event={handleDelete} />
        </div>
      </Modal>

    </>
  )
}
