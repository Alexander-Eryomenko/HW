import Button from "../Button/Button";
import './TodoModal.css'
import {useState} from "react";
import {addTodoButton} from "../../constants/constants";
import {fullDate} from "../../utils/util"
import {v4 as uuidv4} from "uuid";

const optionStatus = ['Open', 'Done', 'In Progress']

const TodoModal = ({titleHeader, onAddEditTodoHandler, btnTitle}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')


    const titleInputHandler = (event) => {
        setTitle(event.target.value)
    }
    const descriptionInputHandler = (event) => {
        setDescription(event.target.value)
    }
    const statusInputHandler = (event) => {
        setStatus(event.target.value)
    }
    const addTodoData = () => {
        if (!title && !description && !status) {
            onAddEditTodoHandler({})
            return
        }
        onAddEditTodoHandler({
            id: uuidv4(),
            title,
            description,
            status,
            creationDate: fullDate,
            updateDate: ''
        })
    }

    const editTodoData = () => {
        if (!title || !description || !status) {
            onAddEditTodoHandler({})
            return
        }
        onAddEditTodoHandler({
            title,
            description,
            status,
            updateDate: fullDate
        })
    }
    return (
        <div className="todo-modal">
            <div className="todo-modal__title">{titleHeader}</div>
            <label htmlFor="title">
                Title
                <input onChange={titleInputHandler} value={title} id="title" type="text"/>
            </label>
            <label htmlFor="description">
                Description
                <input onChange={descriptionInputHandler} value={description} id="description" type="text"/>
            </label>
            {/*<label htmlFor="status">*/}
            {/*    Status*/}
            {/*    <input onChange={statusInputHandler} value={status} id="status" type="text"/>*/}
            {/*</label>*/}
            <select onChange={statusInputHandler} value={status} name="status">
                {optionStatus.map((status) => {
                    return (
                        <option value={status}>{status}</option>
                    )
                })}

            </select>
            <Button onClick={btnTitle === addTodoButton ? addTodoData : editTodoData} className={"add-todo-button edit-todo-button"} title={btnTitle}/>
        </div>
    )
}
export default TodoModal