import axios from "axios";

const baseGoodsUrl = 'http://127.0.0.1:8080'

const commonHeaders = {
    "Content-Type": "application/json"
}

export const createItem = (item) => {
    return performRequest('goods', 'post', item)
}

export const updateItem = (id, item) => {
    return performRequest('goods', 'patch', item, id)
}

export const deleteItem = (id) => {
    return performRequest('goods', 'delete', undefined, id)
}

export const requestGoods = () => {
    return performRequest('goods', 'get')
}

export const performRequest = async ( path, method = 'get', body, id ) => {
    const bodyJson = body ? JSON.stringify(body) : undefined
    const idUpdateDeleteItem = id || undefined
    try {
        const response = await axios({
            method,
            headers: commonHeaders,
            url: [baseGoodsUrl, path, idUpdateDeleteItem].join('/'),
            data: bodyJson
        })
            return {
                success: true,
                response: response.data
            }

    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }

}
