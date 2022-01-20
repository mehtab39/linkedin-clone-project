import {
    SETPOST_SUCCESS,
    SETPOST_LOADING,
    SETPOST_FAILIURE, 
    GETPOST_SUCCESS,
    GETPOST_FAILIURE,
    GETPOST_LOADING
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    errorMessage: null,
    articles: []
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
     
      case GETPOST_LOADING:
        return {
  ...state,
  loading: true
        }
case GETPOST_FAILIURE:
 return {
...state,
      error: true,
      loading: false,
      errorMessage: payload,
      ids: []
};
case GETPOST_SUCCESS:

  return {
      ...state,
      loading: false,
      error: false,
      errorMessage: "",
      articles: payload[0],
      ids: payload[1],
  }
            default:
                return state;
    }
}