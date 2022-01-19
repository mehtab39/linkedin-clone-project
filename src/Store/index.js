import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from '../redux/reducer/index'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store;