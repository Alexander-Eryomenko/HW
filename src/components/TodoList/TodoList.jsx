import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'
import PropTypes from "prop-types";

const TodoList = ({todoData}) => {
    return (
        <ul className="todo-list">
            {todoData.map(task => {
                return (
                <TodoListItem task={task} key={task.id} />
                )
            })}
        </ul>
    )
}

export default TodoList

TodoList.propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object),
}