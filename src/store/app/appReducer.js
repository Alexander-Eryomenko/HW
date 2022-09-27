import { SHOW_ADD_FORM_MODAL, SHOW_EDIT_FORM_MODAL } from './actions';

const initialState = {
    isAddModalVisible: false,
    isEditModalVisible: false,
    editItemId: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_FORM_MODAL:
            return {
                ...state,
                isAddModalVisible: action.isShow
            }
        case SHOW_EDIT_FORM_MODAL:
            return {
                ...state,
                isEditModalVisible: action.isShow,
                editItemId: action.editItemId
            }
        default:
            return state;
    }
}