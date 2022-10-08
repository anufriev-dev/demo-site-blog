import { IAdminComments } from "src/types"
import { Modal, ButtonSubmit, Snack } from "src/components"
import { useEffect, useState } from "react"
import { BlogApi } from "src/http"
import { useRefreshData } from "src/hooks"

import style from "./style.module.scss"


function SnacksView({
  onSnack,
  snack
}) {
  return (
    <>
      <Snack
        text={"Комментарий удалён"} 
        onSnack={(value) => onSnack({ ...snack, delete: value })} 
        snack={snack.delete}  
      />
      <Snack 
        text={"Комментарий НЕ удалён!"} 
        onSnack={(value) => onSnack({ ...snack, fatal: value })} 
        snack={snack.fatal}  
      />
    </>
  )  
}


function ModalView ({ 
  data, 
  modalDelete,
  onModalDelete 
}) {
  const [snack, setSnack] = useState({ delete: false, fatal: false })
  const { refreshData } = useRefreshData()

  async function handleDelete() {
    const result = await BlogApi.deleteComment(data.id)
    
    result === "OK"
      ? setSnack({ ...snack, delete: true })
      : setSnack({ ...snack, fatal:  true })
    
    onModalDelete(false)
    refreshData()
  }

  return (
    <>
      <Modal active={modalDelete} onActive={onModalDelete}>
         <p className="text">Удалить комментарий id = {data.id}</p> 
        <div className={style.buttons}>
          <ButtonSubmit text="Отмена"  event={() => onModalDelete(false)}/>
          <ButtonSubmit text="Удалить" event={handleDelete} />
        </div>
      </Modal>
      <SnacksView onSnack={setSnack} snack={snack} />
    </>
  )
}

export default  function AdminComments(props: IAdminComments ) {
  const {comments: data, state} = props
  const [filteredData, setFilteredData] = useState(data)
  const [modalDelete, setModalDelete] = useState(false)
  const [modalData, setModalData] = useState({ id: "" })

  useEffect(() => {
    setFilteredData(data.filter((comment) => 
      Object.entries(comment)
        .toString()
        .toLowerCase()
        .includes(state.trim().toLowerCase())
    ))
  }, [state, data])

  function deleteComment(id) { 
    setModalData({ ...modalData, id})
    setModalDelete(!modalDelete) 
  }

  const comments = filteredData.map((el) => (
    <tr className={style.tr} key={el.comment_id}>
      <td className={style.td}>{el.comment_id}</td>
      <td className={style.td}>{el.author}</td>
      <td className={style.td}>{el.text}</td>
      <td className={style.td}>{el.date}</td>
      <td className={style.td}>
        <ButtonSubmit 
          className={style.button} 
          event={() => deleteComment(el.comment_id)} 
          text={"Удалить"} 
        />
      </td>
    </tr>
    ))


  return (
    <div className={style.content}>
      <ModalView data={modalData} modalDelete={modalDelete} onModalDelete={setModalDelete} />
        <h1 className="text-h1">Комментарии</h1>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className={style.tr}>
              <th className={style.th}>Id</th>
              <th className={style.th}>Author</th>
              <th className={`${style.td} ${style.text}`}>Text</th>
              <th className={`${style.th} ${style.date}`}>Date</th>
              <th className={style.th}>Settings</th>
            </tr>
          </thead>
          <tbody>{comments}</tbody>
        </table>
    </div>
  )
}
