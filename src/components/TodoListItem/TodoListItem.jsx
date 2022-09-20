import DeleteIcon from '@mui/icons-material/Delete';
import './TodoListItem.css'
import { getColorStatus, fullDate } from "../../utils/util";
import PropTypes from "prop-types";
import TodoList from "../TodoList/TodoList";

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



// Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
// TodoList.propTypes = {
//     task: PropTypes.shape({
//         id: PropTypes.string,
//         title: PropTypes.string,
//         description: PropTypes.string,
//         status: PropTypes.string,
//         creationDate: PropTypes.string,
//         updateDate: PropTypes.string
//     }),
//     onDelete: PropTypes.func.isRequired,
//     showEditModal: PropTypes.func.isRequired
// }
//
// TodoList.defaultProps = {
//     task: PropTypes.shape({
//         id: '',
//         title: '',
//         description: '',
//         status: '',
//         creationDate: '',
//         updateDate: ''
//     })
// }
