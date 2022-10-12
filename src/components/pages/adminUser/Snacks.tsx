import Snack from "src/components/ui/snack"
import { useAdminUser, useAdminUserDispatch } from "src/context"

export default function Snacks() {
  const { snack } = useAdminUser()
  const dispatch = useAdminUserDispatch()
  return (
    <>
      <Snack onSnack={() => dispatch({ type: "close_snack_change" })} 
        snack={snack.change} 
        text={"Пользователь изменен!!"} 
      />
      <Snack onSnack={() => dispatch({ type: "close_snack_delete" })} 
        snack={snack.delete} 
        text={"Пользователь удалён!!"} 
      />
    </>
  )
}
