import { RegExpEmail } from "config"
import { Modal, InputLabel, ButtonSubmit  } from "src/components"
import { useAdminUser, useAdminUserDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { UserApi } from "src/http"
import { isValid } from "src/utils"

import style from "./style.module.scss"


export default function ModatUpdate() {
  const { refreshData } = useRefreshData()
  const { active, formUpdate }  = useAdminUser()
  const dispatch = useAdminUserDispatch()

  const _update = async () => {
    if(
      !isValid(formUpdate.name, { min: 2, regexp: /\D/ig }) &&
      !isValid(formUpdate.email, { regexp: RegExpEmail }) &&
      !isValid(formUpdate.role, { regexp: /^[12]$/ })
    ) return
    
    const body = {
      id: formUpdate.id,
      name: formUpdate.name,
      email: formUpdate.email,
      role: formUpdate.role,
    }
    const resutl = await UserApi.updateUser(body)
    if(resutl === "OK") {
      dispatch({ type: "update_fetch_success" })
      refreshData()
    }
  }

  return (
  <Modal active={active.change} 
    onActive={(value) => dispatch({ type: "active_change", change: value })} 
    >
      <p className="text">Изменить поля</p>
    <InputLabel 
      setState={(value) => dispatch({ type: "user_name", name: value  })} 
      state={formUpdate.name} id={"name"} text="Name" 
    />
    <InputLabel 
      setState={(value) => dispatch({ type: "user_email", email: value  })} 
      state={formUpdate.email} id={"email"} text="E-mail" 
    />
    <InputLabel 
      setState={(value) => dispatch({ type: "user_role", role: value  })} 
      state={formUpdate.role} id={"role"} text="Role" 
    />
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => dispatch({ type: "cancel_change"}) } text="Отмена" />
      <ButtonSubmit event={_update} text="Изменить" />
    </div>
  </Modal>
  )
}
