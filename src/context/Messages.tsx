import { createContext, useContext, useReducer } from "react"
import { IuseMessages } from "src/types"

const MessagesContext = createContext(null)
const MessagesDispatch = createContext(null)


export function MessagesProvider({ children, messages }) {
  const [state, dispatch] = useReducer(messagesReducer, { 
    ...initialState,
    messages
  })

  return (
    <MessagesContext.Provider value={state}>
      <MessagesDispatch.Provider value={dispatch}>
        { children }
      </MessagesDispatch.Provider>
    </MessagesContext.Provider>
  )
}

export function useMessages(): IuseMessages {
  return useContext(MessagesContext)
}
export function useMessagesDispatch() {
  return useContext(MessagesDispatch)
}

function messagesReducer(state, action) {
  switch(action.type) {
    case "filter_data": {
      return {
        ...state,
        messages: action.messages
      }
    }
    case "delete_active": {
      return {
        ...state,
        modalOnActiveDelete: action.value
      }
    }
    case "modal_on": {
      return {
        ...state,
        modalOnActiveDelete: true,
        IdMesssage: action.id
      }
    }
    case "modal_close": {
      return {
        ...state,
        modalOnActiveDelete: false
      }
    }
    case "onSnackAccess": {
      return {
        ...state,
        snackAccess: action.value
      }
    }
    case "onSnackDenied": {
      return {
        ...state,
        snackDenied: action.value
      }
    }
    // sending...
    case "send_delete_success": {
      return {
        ...state,
        modalOnActiveDelete: false,
        snackAccess: true
      }
    }
    case "send_delete_error": {
      return {
        ...state,
        snackDenied: true
      }
    }
  }
}

const initialState = {
  messages: [],
  modalOnActiveDelete: false,
  IdMesssage: 0,
  snackAccess: false,
  snackDenied: false
}
