
import {
    PROFILE_SUCCESS,
    UPDATE_SUCCESS,
    PROFILE_LOADING,
    PROFILE_FAILIURE 
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    profile: null,
    errorMessage: ""
}

export const profileReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case PROFILE_LOADING:
            return {
      ...state,
      loading: true
            }
 case PROFILE_FAILIURE:
     return {
    ...state,
          error: true,
          loading: false,
          errorMessage: payload,
  };
  case PROFILE_SUCCESS:
      return {
          ...state,
          loading: false,
          error: false,
          profile: payload
      }
      case UPDATE_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
        }
     
            default:
                return state;
    }
}