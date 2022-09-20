import Button from "../Button/Button";
import './TodoModal.css'
import {useState, useRef, useEffect} from "react";
import {addTodoButton} from "../../constants/constants";
import {fullDate} from "../../utils/util"
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";

const optionStatus = ['Open', 'Done', 'In Progress']

const TodoModal = ({titleHeader, onAddEditTodoHandler, btnTitle}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    console.log(status)

    const inputTitleRef = useRef(null)

    useEffect(() => {
        inputTitleRef.current.focus()
    }, [inputTitleRef])

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
        if (!title && !description && !status) {
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
                <input ref={inputTitleRef} onChange={titleInputHandler} value={title} id="title" type="text"/>
            </label>
            <label htmlFor="description">
                Description
                <input onChange={descriptionInputHandler} value={description} id="description" type="text"/>
            </label>
            <label htmlFor="status">
                Status
                <select onChange={statusInputHandler} value={status} id="status">
                    <option value="" selected disabled hidden>Choose status</option>
                    {optionStatus.map((status) => {
                        return (
                            <option value={status}>{status}</option>
                        )
                    })}
                </select>
            </label>
            <Button onClick={btnTitle === addTodoButton ? addTodoData : editTodoData} className={"add-todo-button edit-todo-button"} title={btnTitle}/>
        </div>
    )
}
export default TodoModal


TodoModal.propTypes = {
    titleHeader: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
    onAddEditTodoHandler: PropTypes.func.isRequired
}