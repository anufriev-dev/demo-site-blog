import { createContext, useReducer, useContext } from "react"
import { IuseAdminPostsBlog } from "src/types"

const AdminPostsBlogContext = createContext(null)
const AdminPostsBlogDispatch = createContext(null)

export function AdminPostsBlogProvider({ children, posts }) {
  const [state, dispatch] = useReducer(apbReducer, { ...initialState, filterPosts: posts})

  return (
    <AdminPostsBlogContext.Provider value={state}>
      <AdminPostsBlogDispatch.Provider value={dispatch}>
        { children }
      </AdminPostsBlogDispatch.Provider>
    </AdminPostsBlogContext.Provider>
  )
}

export function useAdminPostsBlog(): IuseAdminPostsBlog {
  return useContext(AdminPostsBlogContext)
}

export function useAdminPostsBlogDispatch() {
  return useContext(AdminPostsBlogDispatch)
}


function apbReducer(state, action) {
  switch(action.type){
    case "filter_posts": {
      return {
        ...state,
        filterPosts: action.payload
      }
    }
    case "modal_delete_close": {
      return {
        ...state,
        active: { 
          ...state.active,
           delete: false
        }
      }
    }
    case "delete_fetch_success": {
      return {
        ...state,
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
    case "close_modal_change": {
      return {
        ...state,
        active:{ 
          ...state.active, 
          change: false
        }
      }
    }
    case "fetch_update_success": {
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
    case "open_modal_delete": {
      return {
        ...state,
        post: {
          post_id: action.id
        },
        active: {
          ...state.active,
          delete: !state.active.delete
        }
      }
    }
    case "open_modal_update": {
      return {
        ...state,
        active: {
          ...state.active,
          change: !state.active.change
        },
        post: {
          ...state.post,
          post_id: action.id, 
          category: action.category , 
          summary: action.summary, 
          text: action.text, 
          img_name: action.img
        }
      }
    }
    case "drop_state_form": {
      return {
        ...state,
        post: {
          ...state.post, 
          summary: "", 
          text: "", 
          category: "", 
          img: ""
        }
      }
    }
    case "new_post_modal_toggle": {
      return {
        ...state,
        active: {
          ...state.active, 
          newPost: !state.active.newPost
        }
      }
    }
    case "fetch_create_success": {
      return {
        ...state,
        active: {
          ...state.active,
          newPost: false
        },
        snack: {
          ...state.snack,
          create: true
        }
      }
    }
    case "show_snack_on_add": {
      return {
        ...state,
        snack: { 
          ...state.snack, 
          add: true 
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
    case "close_snack_change": {
      return {
        ...state,
        snack: { 
          ...state.snack, 
          change: false
        }
      }
    }
    case "close_snack_create": {
      return {
        ...state,
        snack: { 
          ...state.snack, 
          create: false
        }
      }
    }
    case "close_snack_add": {
      return {
        ...state,
        add: { 
          ...state.snack, 
          change: false
        }
      }
    }
    case "post_category": {
      return {
        ...state,
        post: {
          ...state.post,
          category: action.category
        }
      }
    }
    case "post_summary": {
      return {
        ...state,
        post: {
          ...state.post,
          summary: action.summary
        }
      }
    }
    case "post_text": {
      return {
        ...state,
        post: {
          ...state.post,
          text: action.text
        }
      }
    }
    case "post_img": {
      return {
        ...state,
        post: {
          ...state.post,
          img: action.img
        }
      }
    }
    case "post_new_post": {
      return {
        ...state,
        active: {
          ...state.active,
          newPost: false
        }
      }
    }
    case "snack_handler_delete": {
      return {
        ...state,
        active: {
          ...state.active,
          delete: action.value
        }
      }
    }
    case "snack_handler_delete_close": {
      return {
        ...state,
        active: {
          ...state.active,
          delete: false
        }
      }
    }
    case "modal_change": {
      return {
        ...state,
        active: {
          ...state.active,
          change: action.change
        }
      }
    }
    case "modal_change_close": {
      return {
        ...state,
        active: {
          ...state.active,
          change: false
        }
      }
    }
  }
}

const initialState = {
  filterPosts: [],
  active: { delete: false, change: false, newPost: false },
  snack: {
    delete: false,
    change: false,  
    create: false,
    add: false
  },
  post: {
    post_id: "",
    category: "",
    summary: "",
    img: null,
    img_name: "",
    text: ""
  }
}
