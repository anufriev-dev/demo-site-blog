import { createContext, useContext, useReducer } from "react"
import { IuseAdminUser } from "src/types"

const AdminUserContext = createContext(null)
const AdminUserDispatch = createContext(null)


export function AdminUserProvider({ children, users }) {
  const [state, dispatch] = useReducer(adminUserReducer, { ...initialState, filterUsers: users })
  
  return (
    <AdminUserContext.Provider value={state}>
      <AdminUserDispatch.Provider value={dispatch}>
        { children }
      </AdminUserDispatch.Provider>
    </AdminUserContext.Provider> 
  )
}

export function useAdminUser(): IuseAdminUser {
  return useContext(AdminUserContext)
}

export function useAdminUserDispatch() {
  return useContext(AdminUserDispatch)
}

function adminUserReducer(state, action) {
  switch(action.type) {
    case "to_search": {
      return {
        ...state,
        filterUsers: action.payload
      }
    }
    case "delete_fetch_success": {
      return {
        ...state,
        filterUsers: action.payload,
        active: {
          ...state.active,
          delete: false
        },
        snack: {
          ...state.snack,
          delete: true
        }
      }
    }
    case "update_fetch_success": {
      return {
        ...state,
        active: {
          ...state.active,
          change: false
        },
        snack: {
          ...state.snack,
          change: true
        }
      }
    }
    case "active_modal_delete": {
      return {
        ...state,
        active: {
          ...state.active,
          delete: !state.active.delete
        },
        formUpdate: {
          ...state.formUpdate,
          id: action.id,
          name: action.name
        }
      }
    }
    case "active_modal_change": {
      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          id: action.id,
          name: action.name,
          email: action.email,
          role: action.role
        },
        active: {
          ...state.active,
          change: !state.active.change
        }
      }
    }
    case "close_snack_change": {
      return {
        ...state,
        snack: {
          ...state.snack,
          change: false
        }
      }
    }
    case "close_snack_delete": {
      return {
        ...state,
        snack: {
          ...state.snack,
          delete: false
        }
      }
    }
    case "cancel_delete": {
      return {
        ...state,
        active: {
          ...state.active,
          delete: !state.active.delete
        }
      }
    }
    case "active_delete": {
      return {
        ...state,
        active: {
          ...state.active,
          delete: action.delete
        }
      }
    }
    case "active_change": {
      return {
        ...state,
        active: {
          ...state.active,
          change: false
        }
      }
    }
    case "cancel_change": {
      return {
        ...state,
        active: {
          ...state.active,
          change: false
        }
      }
    }
    case "user_name": {
      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          name: action.name
        }
      }
    }
    case "user_email": {
      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          email: action.email
        }
      }
    }
    case "user_role": {
      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          role: action.role
        }
      }
    }
  }
}

const initialState = {
  filterUsers: [],
  active: { delete: false, change: false },
  snack: { delete: false, change: false },
  formUpdate: { name: "", email: "", role: "", id: ""}
}
