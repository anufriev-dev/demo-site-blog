import { Container, Snackbar } from "@mui/material"
import { RegExpEmail } from "config"
import { useEffect, useState } from "react"
import { ButtonSubmit, Modal, InputLabel } from "src/components"
import { useRefreshData } from "src/hooks"
import { UserApi } from "src/http"
import { IAdminUser } from "src/types"
import { defineRole, isValid } from "src/utils"

import style from "./style.module.scss"


function Snacks({
  onSnack,
  snack
}) {
  return (
    <>
      <Snackbar
        onClose={() => onSnack({ ...snack, change: false})}
        autoHideDuration={6000}
        open={snack.change} message="Пользователь изменен!!"
      />
      <Snackbar
        onClose={() => onSnack({ ...snack, delete: false})}
        autoHideDuration={6000}
        open={snack.delete} message="Пользователь удалён!!"
      />
    </>
  )
}

function ModalDelete({
  onActiveDelete,
  activeDelete,
  onDelete,
  id,
  name
}) {
  return (
  <Modal active={activeDelete} onActive={onActiveDelete} >
    <p className="text">Удалить пользователя &#34;{name}&#34; c id = &#34;{id}&#34;</p>
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => onActiveDelete(!activeDelete) } text="Отмена" />
      <ButtonSubmit event={() => onDelete(id)} text="Удалить" />
    </div>
  </Modal>
  )
}

function ModatUpdate({
  activeChange,
  onActive,
  data,
  onState,
  onUpdate
}) {
  return (
  <Modal active={activeChange} onActive={onActive} >
    <p className="text">Изменить поля</p>
    <InputLabel setState={(value) => onState({ ...data, name: value  })} state={data.name} id={"name"} text="Name" />
    <InputLabel setState={(value) => onState({ ...data, email: value  })} state={data.email} id={"email"} text="E-mail" />
    <InputLabel setState={(value) => onState({ ...data, role: value  })} state={data.role} id={"role"} text="Role" />
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => onActive(!activeChange) } text="Отмена" />
      <ButtonSubmit event={onUpdate} text="Изменить" />
    </div>
  </Modal>
  )
}

export default function AdminUser(props: IAdminUser) {
  const { state, users } = props
  const { refreshData } = useRefreshData()

  //#region state 
  const [active, setActive] = useState({ delete: false, change: false })
  const [snack, setSnack] = useState({ delete: false, change: false })
  const [filterUsers, setFilterUsers] = useState(users)
  const [formUpdate, setFormUpdate] = useState({ name: "", email: "", role: "", id: ""})
  //#endregion

  // effects
  useEffect(() => {
    setFilterUsers(users.filter((el) =>
      Object.entries(el)
        .toString()
        .toLowerCase()
        .includes(state.toLowerCase())
    ))
  },[state, users])

  // handles
  const _delete = async (id) => {
    const statusText = await UserApi.delete(id)
    
    if(statusText === "OK") {
      setActive({ ...active, delete: false})
      setSnack({ ...snack, delete: true})
      refreshData()
      setFilterUsers(users)
    }
  }

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
      setActive({ ...active, change: false})
      setSnack({ ...snack, change: true})
      refreshData()
    }
  }

  function handleDelete(user) {
    setActive({ ...active, delete: !active.delete }) 
    setFormUpdate({ ...formUpdate, id: user.id, name: user.name })
  }

  function handleChange(user) {
    setFormUpdate({ 
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    })
    setActive({ ...active, change: !active.change}) 
  }

  const tableBody = filterUsers.map((user) => (
    <tr className={style.tr} key={user.id}>
      <td className={style.td}>{user.id}</td>
      <td className={style.td}>{user.name}</td>
      <td className={style.td}>{user.email}</td>
      <td className={style.td}>{defineRole(user.role)}</td>
      <td className={style.td}>{"" + new Date(user.date_registration)}</td>
      <td>
        <ButtonSubmit 
          className={`${style.button} ${style.button_delete}`} 
          text="Удалить" event={() => handleDelete(user) }   
        />
      </td>
      <td>
        <ButtonSubmit 
          className={`${style.button} ${style.button_change}`} 
          text="Изменить" event={() => handleChange(user) } 
        />
      </td>
    </tr>
  ))
  
  return (
    <div>
      <Snacks onSnack={setSnack} snack={snack} />
      <ModatUpdate 
        activeChange={active.change} 
        onUpdate={_update} 
        onActive={(value) => setActive({ ...active, change: value })} 
        onState={setFormUpdate} 
        data={formUpdate} 
      />
      <ModalDelete 
        activeDelete={active.delete} 
        onActiveDelete={(value) => setActive({ ...active, delete: value })} 
        id={formUpdate.id} 
        name={formUpdate.name}
        onDelete={_delete} 
      />

    <div className={style.content}>
        <h1 className={`text-h1 ${style.title}`}>Пользователи</h1>
        <table>
          <thead className={style.thead}>
            <tr className={style.tr}>
              <th className={style.th}>id</th>
              <th className={style.th}>name</th>
              <th className={style.th}>email</th>
              <th className={style.th}>role</th>
              <th className={style.th}>date_registration</th>
              <th colSpan={2}>Настройки</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  )
}
