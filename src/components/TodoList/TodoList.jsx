import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'
import PropTypes from "prop-types";

const TodoList = ({todoData, onDelete, showEditModal}) => {
    return (
        <ul className="todo-list">
            {todoData.map(task => {
                return (
                <TodoListItem task={task} key={task.id} onDelete={onDelete} showEditModal={showEditModal} />
                )
            })}
        </ul>
    )
}

export default TodoList

TodoList.propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    showEditModal: PropTypes.func.isRequired
}