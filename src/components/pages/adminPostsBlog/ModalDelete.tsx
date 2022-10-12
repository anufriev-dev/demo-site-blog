import { Modal, ButtonSubmit } from "src/components"
import { useAdminPostsBlog, useAdminPostsBlogDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { BlogApi } from "src/http"
import { isValid } from "src/utils"
import style from "./style.module.scss"


export default function ModalDelete() {
  const { refreshData } = useRefreshData()
  const { post, active } = useAdminPostsBlog()
  const dispatch = useAdminPostsBlogDispatch()

  const _delete = async (id) => {
    const statusText = await BlogApi.deletePost(id)
    if(!isValid(+id, { sign: true })) {
      dispatch({ type: "modal_delete_close" })  
      return
    }
    if(statusText === "OK") {
      dispatch({ type: "delete_fetch_success" })
      refreshData()
    }
  }
  const handlerSnack = (value) => {
    dispatch({ type: "snack_handler_delete", value })
  }
  const handlerSnackClose = (value) => {
    dispatch({ type: "snack_handler_delete_close", value })
  }

  return (
    <Modal active={active.delete} onActive={handlerSnack} >
      <p className="text">Удалить пост c id = &#34;{post.post_id}&#34; со всеми его комментариями?</p>
      <div className={style.modal__delete_buttons}>
        <ButtonSubmit event={handlerSnackClose} text="Отмена" />
        <ButtonSubmit event={() => _delete(post.post_id)} text="Удалить" />
      </div>
    </Modal>
  )
}
