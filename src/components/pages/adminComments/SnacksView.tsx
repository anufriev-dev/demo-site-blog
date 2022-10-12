import { Snack } from "src/components"
import { useAdminComments, useAdminCommentsDispatch } from "src/context"


export default function SnacksView() {
  const { snack } = useAdminComments()
  const dispatch = useAdminCommentsDispatch()

  const handlerSnackDelete = (value) => {
    dispatch({ type: "snack_handler_delete", value })
  }
  const handlerSnackFatal = (value) => {
    dispatch({ type: "snack_handler_fatal", value })
  }
  return (
    <>
      <Snack
        text={"Комментарий удалён"} 
        onSnack={handlerSnackDelete} 
        snack={snack.delete}  
      />
      <Snack 
        text={"Комментарий НЕ удалён!"} 
        onSnack={handlerSnackFatal} 
        snack={snack.fatal}  
      />
    </>
  )  
}
