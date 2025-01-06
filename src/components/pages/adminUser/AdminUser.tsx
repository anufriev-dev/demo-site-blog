import { useEffect } from "react"
import { ButtonSubmit, Snack } from "src/components"
import { IAdminUser } from "src/types"
import { defineRole } from "src/utils"
import { useAdminUser, useAdminUserDispatch } from "src/context"
import { Snacks, ModatUpdate, ModalDelete } from "."

import style from "./style.module.scss"

export default function AdminUser(props: IAdminUser) {
  const { state, users } = props

  const { filterUsers }  = useAdminUser()
  const dispatch = useAdminUserDispatch()

  // effects
  useEffect(() => {
    if (Array.isArray(users)) {
      dispatch({
        type: "to_search",
        payload: users.filter((el) =>
          Object.entries(el)
            .toString()
            .toLowerCase()
            .includes(state.toLowerCase())
        )
      });
    } else {
      console.error("Users is not an array:", users);
    }
  }, [state, users, dispatch]);

  // handles
  function handleDelete(user) {
    dispatch({
      type: "active_modal_delete",
      id: user.id,
      name: user.name
    })
  }

  function handleChange(user) {
    dispatch({
      type: "active_modal_change",
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  }

  const tableBody = Array.isArray(filterUsers) && filterUsers.length > 0 ? (
    filterUsers.map((user) => (
      <tr className={style.tr} key={user.id}>
        <td className={style.td}>{user.id}</td>
        <td className={style.td}>{user.name}</td>
        <td className={style.td}>{user.email}</td>
        <td className={style.td}>{defineRole(user.role)}</td>
        <td className={style.td}>{"" + new Date(user.date_registration)}</td>
        <td>
          <ButtonSubmit
            className={`${style.button} ${style.button_delete}`}
            text="Удалить" event={() => handleDelete(user)}
          />
        </td>
        <td>
          <ButtonSubmit
            className={`${style.button} ${style.button_change}`}
            text="Изменить" event={() => handleChange(user)}
          />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className={style.td}>Нет пользователей</td> {/* Заглушка */}
    </tr>
  );

  return (
    <div>
      <Snacks />
      <ModatUpdate />
      <ModalDelete users={users} />
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
