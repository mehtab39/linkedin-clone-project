import {combineReducers} from 'redux'
import {userReducer} from "./userReducer"
import {postReducer} from "./postReducer"
import { profileReducer } from './profileReducer'
import { connectionReducer } from './connectionReducer'
import { messageReducer } from './messageReducer'
export const rootReducer = combineReducers({
     userState: userReducer,
     postState: postReducer,
     profileState: profileReducer,
     connectionState: connectionReducer,
     messageState: messageReducer,
})