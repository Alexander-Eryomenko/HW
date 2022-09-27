export const SHOW_ADD_FORM_MODAL = 'SHOW_ADD_FORM_MODAL';
export const SHOW_EDIT_FORM_MODAL = 'SHOW_REMOVE_FORM_MODAL';

export const showAddFormModal = (isShow) => {
    return {
        type: SHOW_ADD_FORM_MODAL,
        isShow
    }
}

export const showEditFormModal = (isShow, editItemId) => {
    return {
        type: SHOW_EDIT_FORM_MODAL,
        isShow,
        editItemId
    }
}
