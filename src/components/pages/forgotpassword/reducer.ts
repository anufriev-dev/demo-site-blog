export const initialState = {
  email: "",
  isActive: false,
  isErrorEmail: false,
  loading: false
}

export function reducer(state,action) {
  switch(action.type) {
    case "start_loading...":{
      return {
        ...state,
        loading: true,
        isErrorEmail: false
      }
    }
    case "error":{
      return {
        ...state,
        loading: false,
        isErrorEmail: true
      }
    }
    case "end_loading": {
      return {
        ...state,
        loading: false,
        isActive: !state.isActive
      }
    }
    case "input_email": {
      return {
        ...state,
        email: action.value
      }
    }
    default:
      return state
    }
}
