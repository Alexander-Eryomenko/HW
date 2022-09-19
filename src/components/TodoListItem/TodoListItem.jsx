import DeleteIcon from '@mui/icons-material/Delete';
import './TodoListItem.css'
import { getColorStatus, fullDate } from "../../utils/util";

const TodoListItem = ({task, onDelete, showEditModal}) => {

    const {id, title, description, status, creationDate, updateDate} = task

    const colorStyleFromStatus = `todo-list-item ${getColorStatus(status)}`

    const onDeleteHandler = () => {
        onDelete(id)
    }

    const showEditModalHandler = () => {
        showEditModal(id)
    }

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