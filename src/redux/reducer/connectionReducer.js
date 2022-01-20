import {
    CONNECTION_SUCCESS,
    CONNECTION_LOADING,
    CONNECTION_FAILIURE 
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    errorMessage: null,
}

export const connectionReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case CONNECTION_LOADING:
            console.log("hi");
            return {
       
      ...state,
      loading: true
            }
 case CONNECTION_FAILIURE:
     return {
    ...state,
          error: true,
          loading: false,
          errorMessage: payload,
  };
  case CONNECTION_SUCCESS:
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