import { createContext, useContext, useReducer } from "react"
import { IuseAdminComments } from "src/types"

const AdminCommentsContext = createContext(null)
const AdminCommentsDispatch = createContext(null)

export function AdminCommentsProvider({ children, comments }) {
  const [state, dispatch] = useReducer(acReducer, {...initialState, filteredData: comments })

  return (
    <AdminCommentsContext.Provider value={state}>
      <AdminCommentsDispatch.Provider value={dispatch}>
        { children }
      </AdminCommentsDispatch.Provider>
    </AdminCommentsContext.Provider>
  )
}

export function useAdminComments(): IuseAdminComments {
  return useContext(AdminCommentsContext)
}

export function useAdminCommentsDispatch() {
  return useContext(AdminCommentsDispatch)
}

function acReducer(state, action) {
  switch(action.type) {
    case "modal_delete_active": {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          id: action.id
        },
        modalDelete: !state.modalDelete
      }
    }
    case "filter_data": {
      return {
        ...state,
        filteredData: action.payload
      }
    }
    case "modal_delete_close": {
      return {
        ...state,
        modalDelete: false
    }
  }
  case "fetch_delete_success": {
    return {
      ...state,
      snack: {
        ...state.snack,
         delete: true
      },
      modalDelete: false
    }
  }
  case "fetch_delete_success": {
    return  {
      ...state,
      snack: {
        ...state.snack,
        fatal: true 
      },
      modalDelete: false
    }
  }
  case "snack_handler_delete": {
    return {  
      ...state,
      snack: { 
        ...state.snack,
        delete: action.value 
        }
      }
    }
  case "snack_handler_fatal": {
    return {  
      ...state,
      snack: { 
        ...state.snack,
        fatal: action.value 
        }
      }
    }
  }
}

const initialState = {
  filteredData: null,
  modalDelete: false,
  modalData: { id: ""},
  snack: { delete: false, fatal: false }
}
