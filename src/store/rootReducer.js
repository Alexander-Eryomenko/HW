import { combineReducers } from 'redux'
import { todoReducer } from "./todoList/todoReducer";
import { appReducer } from "./app/appReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer
})

export default rootReducer