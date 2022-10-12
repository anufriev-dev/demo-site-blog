import { Snack } from "src/components"
import { useMessages, useMessagesDispatch } from "src/context"


export default function Snacks() {
  const state = useMessages()
  const dispatch = useMessagesDispatch()
  
  return (
    <>
      <Snack 
        onSnack={(value) => dispatch({ type: "onSnackAccess", value})} 
        snack={state.snackAccess} text={"Сообщение удалено!"} 
      />
      <Snack 
        onSnack={(value) => dispatch({ type: "onSnackDenied", value})} 
        snack={state.snackDenied} text={"Сообщение НЕ удалено!"} 
      />
    </>
  )
}
