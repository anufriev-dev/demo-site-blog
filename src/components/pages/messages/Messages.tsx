import { Container } from "@mui/system"
import { useEffect, useReducer } from "react"
import { ButtonSubmit, Modal, Snack } from "src/components"
import { useRefreshData } from "src/hooks"
import { Message } from "src/http"
import { IMessagePage } from "src/types"

import { messagesReducer, initialState } from "./messagesReducer"
import style from "./style.module.scss"


function ModalDelete({
  onActiveDelete,
  activeDelete,
  onDelete,
  id,
}) {
  return (
  <Modal active={activeDelete} onActive={onActiveDelete} >
    <p className="text">Удалить сообщение c id = &#34;{id}&#34;?</p>
    <div className={style.modal__delete_buttons}>
      <ButtonSubmit event={() => onActiveDelete(!activeDelete) } text="Отмена" />
      <ButtonSubmit event={() => onDelete(id)} text="Удалить" />
    </div>
  </Modal>
  )
}


export default function Messages(props: IMessagePage) {
  const { state: stateSearch, messages } = props
  const { refreshData } = useRefreshData()
  
  const [state, dispatch] = useReducer(messagesReducer, { 
    ...initialState, 
    messages: messages
  })

  useEffect(() => {
    const resutl = messages.filter((el) =>
      Object.entries(el)
        .toString()
        .toLowerCase()
        .includes(stateSearch.trim().toLowerCase())
    )
    dispatch({ type: "filter_data", messages: resutl })
  },[stateSearch,messages])

  //handles
  async function _delete() {
    const result = await Message.delete(state.IdMesssage)

    if(result === "OK") {
      dispatch({ type: "send_delete_success" })
      refreshData()
      return
    }
    dispatch({ type: "send_delete_error" })
  }


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
      <ModalDelete id={state.IdMesssage}
        activeDelete={state.modalOnActiveDelete} 
        onActiveDelete={(value) => dispatch({ type: "delete_active", value })}
        onDelete={_delete}  
      />
      <Snack 
        onSnack={(value) => dispatch({ type: "onSnackAccess", value})} 
        snack={state.snackAccess} text={"Сообщение удалено!"} 
      />
      <Snack 
        onSnack={(value) => dispatch({ type: "onSnackDenied", value})} 
        snack={state.snackDenied} text={"Сообщение НЕ удалено!"} 
      />
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
