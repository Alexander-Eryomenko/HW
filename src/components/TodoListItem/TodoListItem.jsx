import DeleteIcon from '@mui/icons-material/Delete';
import './TodoListItem.css'
import { getColorStatus, fullDate } from "../../utils/util";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import {removeTodoItem} from "../../store/todoList/actions";
import {showEditFormModal} from "../../store/app/actions";
import {useCallback, useMemo} from "react";

const TodoListItem = ({task}) => {
    const dispatch = useDispatch()

    const {id, title, description, status, creationDate, updateDate} = task

    const colorStyleFromStatus = useMemo(() => {
        return `todo-list-item ${getColorStatus(status)}`
    }, [status])

    const onDeleteHandler = useCallback(() => {
        dispatch(removeTodoItem(id))
    }, [dispatch, id])

    const showEditModalHandler = useCallback(() => {
        dispatch(showEditFormModal(true, id))
    }, [dispatch, id])

    return (
        <li title="Double click for edit" className={colorStyleFromStatus} onDoubleClick={showEditModalHandler}>
            {title && <div>Title: {title}</div>}
            {description && <div>Description: {description}</div>}
            {status && <div>Status: {status}</div>}
            {creationDate && <div>Create todo date: {fullDate}</div>}
            {updateDate && <div>Update todo date: {updateDate}</div>}
            <DeleteIcon  onClick={onDeleteHandler}/>
        </li>
    )
}

export default TodoListItem

TodoListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string,
        creationDate: PropTypes.string,
        updateDate: PropTypes.string
    })
}

TodoListItem.defaultProps = {
    task: PropTypes.shape({
        id: '',
        title: '',
        description: '',
        status: '',
        creationDate: '',
        updateDate: ''
    })
}
