import { useAdminUser, useAdminUserDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { UserApi } from "src/http"
import { Modal, ButtonSubmit  } from "src/components"

import style from "./style.module.scss"


export default function ModalDelete({users}){
  const { refreshData } = useRefreshData()

  const { active, formUpdate }  = useAdminUser()
  const dispatch = useAdminUserDispatch()

  const _delete = async (id) => {
    const statusText = await UserApi.delete(id)
    if(statusText === "OK") {
      dispatch({ type: "delete_fetch_success", payload: users})
      refreshData()
    }
  }
  
  return (
  <Modal active={active.delete} onActive={(value) => dispatch({ type: "active_delete", delete: value })} >
    <p className="text">Удалить пользователя &#34;{formUpdate.name}&#34; c id = &#34;{formUpdate.id}&#34;</p>
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => dispatch({ type: "cancel_delete" }) } text="Отмена" />
      <ButtonSubmit event={() => _delete(formUpdate.id) } text="Удалить" />
    </div>
  </Modal>
  )
}
