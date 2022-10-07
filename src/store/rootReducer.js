import { combineReducers } from 'redux'
import { todoReducer } from "./todoList/todoReducer";
import { appReducer } from "./app/appReducer";
import { goodsReducer } from './goods/goodsReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer,
    goods: goodsReducer
})

export default rootReducer
