
import {
    PROFILE_SUCCESS,
    PROFILE_FOUND_SUCCESS,
    PROFILE_NOT_FOUND,
    UPDATE_SUCCESS,
    PROFILE_LOADING,
    PROFILE_FAILIURE 
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    profile: null,
    errorMessage: "",
    profileSection:{},
    profileError: false
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
          profile: payload,
          profileError: false
      }
      case PROFILE_FOUND_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            profileSection: payload,
            profileError: false
        }
        case PROFILE_NOT_FOUND:
            return {
                ...state,
                loading: false,
                profileError: true,

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