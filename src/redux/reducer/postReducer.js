import {
    SETPOST_SUCCESS,
    SETPOST_LOADING,
    SETPOST_FAILIURE 
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    errorMessage: null,
}

export const postReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case SETPOST_LOADING:
            return {
      ...state,
      loading: true
            }
 case SETPOST_FAILIURE:
     return {
    ...state,
          error: true,
          loading: false,
          errorMessage: payload,
  };
  case SETPOST_SUCCESS:
      return {
          ...state,
          loading: false,
          error: false,
          errorMessage: ""
      }
     
            default:
                return state;
    }
}