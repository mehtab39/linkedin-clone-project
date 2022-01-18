import {combineReducers} from 'redux'
import {userReducer} from "./userReducer"
import {postReducer} from "./postReducer"
export const rootReducer = combineReducers({
     userState: userReducer,
     postState: postReducer,
})