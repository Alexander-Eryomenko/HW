export const GET_GOODS_LIST_REQUEST = 'GET_GOODS_LIST_REQUEST'
export const GET_GOODS_LIST_SUCCESS = 'GET_GOODS_LIST_SUCCESS'
export const GET_GOODS_LIST_FAILED = 'GET_GOODS_LIST_FAILED'

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST'
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'
export const CREATE_ITEM_FAILED = 'CREATE_ITEM_FAILED'

export const UPDATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST'
export const UPDATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAILED = 'CREATE_ITEM_FAILED'

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILED = 'DELETE_ITEM_FAILED'

export const getGoodsListRequest = () => {
    return {
        type: GET_GOODS_LIST_REQUEST
    }
}

export const getGoodsListSuccess = (list) => {
    return {
        type: GET_GOODS_LIST_SUCCESS,
        list
    }
}

export const getGoodsListFailed = (error) => {
    return {
        type: GET_GOODS_LIST_FAILED,
        error
    }
}


export const createItemRequest = () => {
    return {
        type: CREATE_ITEM_REQUEST
    }
}

export const createItemSuccess = (item) => {
    console.log(`item in actions ${item}`)
    return {
        type: CREATE_ITEM_SUCCESS,
        item
    }
}

export const createItemFailed = (error) => {
    return {
        type: CREATE_ITEM_FAILED,
        error
    }
}

export const updateItemRequest = (item) => {
    return {
        type: UPDATE_ITEM_REQUEST,
        item
    }
}

export const updateItemSuccess = (item) => {
    return {
        type: UPDATE_ITEM_SUCCESS,
        item
    }
}

export const updateItemFailed = (error, item) => {
    return {
        type: UPDATE_ITEM_FAILED,
        error,
        item
    }
}

export const deleteItemRequest = (id) => {
    return {
        type: DELETE_ITEM_REQUEST,
        id
    }
}

export const deleteItemSuccess = (id) => {
    return {
        type: DELETE_ITEM_SUCCESS,
        id
    }
}

export const deleteItemFailed = (error, id) => {
    return {
        type: DELETE_ITEM_FAILED,
        error,
        id
    }
}
