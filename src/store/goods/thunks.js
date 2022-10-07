import { requestGoods, createItem, updateItem, deleteItem } from "../../services/goodsService";
import {
    getGoodsListRequest,
    getGoodsListSuccess,
    getGoodsListFailed,
    createItemRequest,
    createItemSuccess,
    createItemFailed,
    updateItemRequest,
    updateItemSuccess,
    updateItemFailed,
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemFailed
} from './actions'

export const createItemThunk = (item) => {
    return async (dispatch) => {
        dispatch(createItemRequest())
        const response = await createItem(item)
        if(response.success) {
            dispatch(createItemSuccess(response.response))
        } else {
            dispatch(createItemFailed(response.error))
        }

    }
}

export const updateGoodsThunk = (id, item) => {
    return async (dispatch) => {
        dispatch(updateItemRequest(item))
        const response = await updateItem(id, item)
        if(response.success) {
            dispatch(updateItemSuccess(response.response))
        } else {
            dispatch(updateItemFailed(response.error))
        }

    }
}

export const deleteGoodsThunk = (id) => {
    return async (dispatch) => {
        dispatch(deleteItemRequest(id))
        const response = await deleteItem(id)
        if(response.success) {
            dispatch(deleteItemSuccess(response.response.id))
        } else {
            dispatch(deleteItemFailed((response.error, id)))
        }

    }
}

export const fetchGoodsThunk = () => {
    return async (dispatch) => {
        dispatch(getGoodsListRequest())
        const response = await requestGoods()
        if(response.success) {
            dispatch(getGoodsListSuccess(response.response.goods))
        } else {
            dispatch(getGoodsListFailed(response.error))
        }

    }
}
