import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./rootReducer";

const logger = state => next => action => {
    console.log('Action', action)
    const returnValue = next(action)
    console.log('new state: ', store.getState())
    return returnValue
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
