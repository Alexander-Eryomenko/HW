import { ADD_TODO_ITEM, EDIT_TODO_ITEM, REMOVE_TODO_ITEM, SET_DATA_FROM_LOCAL_STORAGE } from "./actions";
import { v4 as uuidv4 } from 'uuid';


const initialData = [
    {
        id: uuidv4(),
        title: 'React',
        description: 'Learn React',
        status: 'Open',
        creationDate: '',
        updateDate: ''
    },
    {
        id: uuidv4(),
        title: 'Vue',
        description: 'Learn Vue',
        status: 'Done',
        creationDate: '',
        updateDate: ''
    },
    {
        id: uuidv4(),
        title: 'Angular',
        description: 'Learn Angular',
        status: 'In progress',
        creationDate: '',
        updateDate: ''
    }
]

export const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [
                ...state,
                action.item
            ]
        case EDIT_TODO_ITEM:
            return state.map((itemTodo) => {
                return itemTodo.id === action.item.id ? {
                    ...itemTodo,
                    title: action.item.title,
                    description: action.item.description,
                    status: action.item.status,
                    updateDate: action.item.updateDate
                } : itemTodo
            })
        case REMOVE_TODO_ITEM:
            return [
                ...state.filter(itemTodo => itemTodo.id !== action.itemId)
            ]
        case SET_DATA_FROM_LOCAL_STORAGE:
            return [
                ...state,
                ...action.data
            ]
        default:
            return state
    }
}
