export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const EDIT_TODO_ITEM = 'EDIT_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const SET_DATA_FROM_LOCAL_STORAGE = 'SET_DATA_FROM_LOCAL_STORAGE'

export const addTodoItem = (itemData) => {
    return {
        type: ADD_TODO_ITEM,
        item: itemData
    }
}

export const editTodoItem = (itemData) => {
    return {
        type: EDIT_TODO_ITEM,
        item: itemData
    }
}

export const removeTodoItem = (id) => {
    return {
        type: REMOVE_TODO_ITEM,
        itemId: id
    }
}

export const setDataFromLocalStorage = (data) => {
    return {
        type: SET_DATA_FROM_LOCAL_STORAGE,
        data
    }
}