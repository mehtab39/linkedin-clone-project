import {
    SIGNIN_LOADING,
    SIGNIN_FAILIURE,
    SIGNIN_SUCCESS,
    SIGNOUT_SUCCESS
} from "../actions/actionTypes";


const init_state = {
    user: null,
    isAuth: false,
    error: false,
    loading: false,
    errorMessage: null,
}

export const userReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case SIGNIN_LOADING:
            return {
                ...state,
                loading: true
            }
 case SIGNIN_FAILIURE:
     return {
    ...state,
        isAuth: false,
          error: true,
          user: null,
          loading: false,
          errorMessage: payload,
  };
  case SIGNIN_SUCCESS:
      return {
          ...state,
          user: payload,
          isAuth: true,
          loading: false,
          error: false,
          errorMessage: ""
      }
      case SIGNOUT_SUCCESS:
      return {
          ...state,
          user: null,
          isAuth: false,
          loading: false,
          error: false,
          errorMessage: ""
      }
            default:
                return state;
    }
}