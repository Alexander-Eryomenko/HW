import {
    GET_GOODS_LIST_REQUEST,
    GET_GOODS_LIST_SUCCESS,
    GET_GOODS_LIST_FAILED,
    CREATE_ITEM_REQUEST,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAILED,
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILED,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILED

} from "./actions";


const initialData = {
    data: [],
    isDataLoading: false,
    isDataAdding: false,
    isDataUpdating: {},
    isDataDeleting: {}
}

export const goodsReducer = (state = initialData, action) => {
    switch (action.type) {
        case CREATE_ITEM_REQUEST:
            return {
                ...state,
                isDataAdding: true,
                error: null
            }
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isDataAdding: false,
                data: [...state.data, action.item],
            }
        case CREATE_ITEM_FAILED:
            return {
                ...state,
                isDataAdding: false,
                error: action.error
            }
        case GET_GOODS_LIST_REQUEST:
            return {
                ...state,
                isDataLoading: true,
                error: null
            }
        case GET_GOODS_LIST_SUCCESS:
            return {
                ...state,
                data: action.list,
                isDataLoading: false
            }
        case GET_GOODS_LIST_FAILED:
            return {
                ...state,
                data: [],
                error: action.error,
                isDataLoading: false
            }
        case UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isDataUpdating: {
                    [action.item.id]: true
                },
                error: null
            }
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                data: state.data.map(item => {
                    return item.id === action.item.id ? {
                        ...item,
                        title: action.item.title,
                        description: action.item.description,
                        weight: action.item.weight
                    } : item
        }),
                isDataUpdating: {
                    [action.item.id]: false
                }
            }
        case UPDATE_ITEM_FAILED:
            return {
                ...state,
                data: [],
                error: action.error,
                isDataUpdating: {
                    [action.item.id]: false
                },
            }
        case DELETE_ITEM_REQUEST:
            return {
                ...state,
                isDataDeleting: {
                    [action.id]: true
                },
                error: null
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                data: state.data.filter(item => {
                    return item.id !== action.id
                }),
                isDataDeleting: {
                    [action.id]: false
                }
            }
        case DELETE_ITEM_FAILED:
            return {
                ...state,
                data: [],
                error: action.error,
                isDataDeleting: {
                    [action.id]: false
                }
            }
        default:
            return state
    }
}
