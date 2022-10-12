import { Container } from "@mui/system"
import { useEffect } from "react"
import { ButtonSubmit, } from "src/components"
import { useMessages, useMessagesDispatch } from "src/context"
import { IMessagePage } from "src/types"
import { Snacks, ModalDelete } from "."

import style from "./style.module.scss"


export default function Messages(props: IMessagePage) {
  const { state: stateSearch, messages } = props
  
  const state = useMessages()
  const dispatch = useMessagesDispatch()

  useEffect(() => {
    const resutl = messages.filter((el) =>
      Object.entries(el)
        .toString()
        .toLowerCase()
        .includes(stateSearch.trim().toLowerCase())
    )
    dispatch({ type: "filter_data", messages: resutl })
  },[stateSearch, messages, dispatch])

  const tdata = state.messages.map((message) => 
    <tr className={style.tr} key={message.id}>
      <td className={style.td}>{message.id}</td>
      <td className={style.td}>{message.email}</td>
      <td className={style.td}>{message.text}</td>
      <td className={style.td}>
        <ButtonSubmit 
          className={`${style.button} ${style.button_delete}`} 
          text="Удалить" 
          event={() => dispatch({ type: "modal_on", id: message.id })}  
        />
      </td>
    </tr>
  )

  return (
    <div className={style.content}>
      <Snacks />
      <ModalDelete />
      <Container>
        <h1 className="text-h1">Сообщения</h1>
      <table>
        <thead>
          <tr className={style.tr}>
            <th className={style.th}>Id</th>
            <th className={style.th}>E-mail</th>
            <th className={style.th}>Message</th>
            <th className={style.th}>Settings</th>
          </tr>
        </thead>
        <tbody>
          {tdata}
        </tbody>
      </table>
      </Container>
    </div>
  )
}
