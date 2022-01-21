import {
    MESSAGE_SUCCESS,
    MESSAGE_LOADING,
    MESSAGE_FAILIURE, 
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    errorMessage: null,
    messages: []
}


export const messageReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
          case MESSAGE_LOADING:
        return {
  ...state,
  loading: true
        }
case MESSAGE_FAILIURE:
 return {
...state,
      error: true,
      loading: false,
      errorMessage: payload,
};
case MESSAGE_SUCCESS:

  return {
      ...state,
      loading: false,
      error: false,
      errorMessage: "",
       messages : payload
  }
  case MESSAGE_SUCCESS:

  return {
      ...state,
      loading: false,
      error: false,
      errorMessage: "",
  }
            default:
                return state;
    }
}