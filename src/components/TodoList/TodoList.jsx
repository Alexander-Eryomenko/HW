import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'


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