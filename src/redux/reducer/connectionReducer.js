import {
    CONNECTION_SUCCESS,
    CONNECTION_LOADING,
    CONNECTION_FAILIURE,
    SUGGESTION_SUCCESS,
    PENDING_SUCCESS,
    SENT_SUCCESS,
    NO_CONNECTIONS,
    USERACTIVITY_SUCCESS
} from "../actions/actionTypes";


const init_state = {
    loading: false,
    error: false,
    errorMessage: null,
    noconnection: false,
    connections:[],
    suggestions:[],
    pending:[],
    sent:[]
}

export const connectionReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case CONNECTION_LOADING:
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
          errorMessage: "",
          connections: payload
      }
      case NO_CONNECTIONS:
        return {
            ...state,
            loading: false,
            no_connections: true,
        }
      case SUGGESTION_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            errorMessage: "",
            suggestions: payload
        }
        case PENDING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: "",
                pending: payload
            }
            case SENT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: false,
                    errorMessage: "",
                    sent: payload
                }
                case USERACTIVITY_SUCCESS:
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