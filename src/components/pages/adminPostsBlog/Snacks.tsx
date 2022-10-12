import { useAdminPostsBlog, useAdminPostsBlogDispatch } from "src/context"
import { Snackbar } from "@mui/material"

export default function Snacks() {
  const {snack} = useAdminPostsBlog()
  const dispatch = useAdminPostsBlogDispatch()

  return (
    <>
      <Snackbar onClose={ () => dispatch({ type: "close_snack_delete" }) }  
        autoHideDuration={6000}
        open={snack.delete} message="Пост удалён"
      />
      <Snackbar onClose={() => dispatch({ type: "close_snack_change" }) }  
        autoHideDuration={6000}
        open={snack.change} message="Пост изменен"
      />
      <Snackbar onClose={() => dispatch({ type: "close_snack_create" }) } 
        autoHideDuration={6000}
        open={snack.create} message="Пост создан"
      />
      <Snackbar onClose={() => dispatch({ type: "close_snack_add" })}  
        autoHideDuration={6000}
        open={snack.add} message="Ошибка добавления"
      />
    </>
  )
}
