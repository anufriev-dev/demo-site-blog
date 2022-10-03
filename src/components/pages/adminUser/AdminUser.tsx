import { Container, Snackbar } from "@mui/material"
import { RegExpEmail } from "config"
import { useState } from "react"
import { ButtonSubmit, Modal, InputLabel } from "src/components"
import { useAdminUser, useRefreshData } from "src/hooks"
import { UserApi } from "src/http"
import { IAdminUser } from "src/types"
import { defineRole, isValid } from "src/utils"

import style from "./style.module.scss"


function AdminUser(props: IAdminUser) {
  const { refreshData } = useRefreshData()
  
  const {
    activeDelete, activeChange,
    setActiveDelete, setActiveChange,
    _delete, data, setData, snack,
    onCloseSnack, filterUsers
 } = useAdminUser(props)

  const [chName, setChName] = useState(data.name || "")
  const [chEmail, setChEmail] = useState(data.email || "")
  const [chRole, setChRole] = useState(data.role || "")
  const [id, setId] = useState(data.id || "")

  const _update = async () => {
    if(
      !isValid(chName, { min: 2, regexp: /\D/ig }) &&
      !isValid(chEmail, { regexp: RegExpEmail }) &&
      !isValid(chRole, { regexp: /^[12]$/ })
    ) return
    
    const body = {
      id,
      name: chName,
      email: chEmail,
      role: chRole,
    }
    const resutl = await UserApi.updateUser(body)
    if(resutl === "OK") {
      setActiveChange(false)
      refreshData()
    }
  }
  
  return (
    <div>
        <Snackbar
          onClose={onCloseSnack}
          autoHideDuration={6000}
          open={snack} message="Пользователь удалён!!"
        />
      <Modal active={activeChange} setActive={setActiveChange} >
        <p className="text">Изменить поля</p>
        <InputLabel setState={setChName} state={chName} id={"name"} text="Name" />
        <InputLabel setState={setChEmail} state={chEmail} id={"email"} text="E-mail" />
        <InputLabel setState={setChRole} state={chRole} id={"role"} text="Role" />
        <div className={style.modal__delete_buttons}>
          <ButtonSubmit event={() => setActiveChange(!activeChange) } text="Отмена" />
          <ButtonSubmit event={() => _update()} text="Изменить" />
        </div>
      </Modal>

      <Modal active={activeDelete} setActive={setActiveDelete} >
        <p className="text">Удалить пользователя &#34;{data.name}&#34; c id = &#34;{data.id}&#34;</p>
        <div className={style.modal__delete_buttons}>
          <ButtonSubmit event={() => setActiveDelete(!activeDelete) } text="Отмена" />
          <ButtonSubmit event={() => _delete(data.id)} text="Удалить" />
        </div>
      </Modal>

    <div className={style.wrappTable}>
      <Container>
        <h1 className="text-h1">Пользователи</h1>
        <table>
          <tbody>
            <tr className={style.tr}>
              <th className={style.th}>id</th>
              <th className={style.th}>name</th>
              <th className={style.th}>email</th>
              <th className={style.th}>role</th>
              <th className={style.th}>date_registration</th>
              <th colSpan={2}>Настройки </th>
            </tr>
            {
              filterUsers.length
              ? filterUsers.map((user) => (
              <tr className={style.tr} key={user.id}>
                <td className={style.td}>{user.id}</td>
                <td className={style.td}>{user.name}</td>
                <td className={style.td}>{user.email}</td>
                <td className={style.td}>{defineRole(user.role)}</td>
                <td className={style.td}>{"" + new Date(user.date_registration)}</td>
                <td>
                  <ButtonSubmit 
                    className={`${style.button} ${style.button_delete}`} 
                    text="Удалить" event={() => {
                      setActiveDelete(!activeDelete)
                      setData(user)
                    }}   
                  />
                </td>
                <td>
                  <ButtonSubmit 
                    className={`${style.button} ${style.button_change}`} 
                    text="Изменить" event={() => {
                      setChName(user.name); setChEmail(user.email)
                      setChRole(user.role); setId(user.id)
                      setActiveChange(!activeChange)
                    }} 
                  />
                </td>
              </tr>
            ))
            : <p>Не найдено</p>
          }
          </tbody>
        </table>
      </Container>
      </div>
    </div>
  )
}

export default AdminUser
