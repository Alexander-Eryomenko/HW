import Button from "../Button/Button";
import './TodoModal.css'
import {useState, useRef, useEffect, useCallback} from "react";
import {addTodoButton} from "../../constants/constants";
import {fullDate} from "../../utils/util"
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {showAddFormModal, showEditFormModal} from "../../store/app/actions";
import {addTodoItem, editTodoItem} from "../../store/todoList/actions";
import {selectEditItemId} from "../../store/app/selectors";

const optionStatus = ['Open', 'Done', 'In Progress']

const TodoModal = ({titleHeader, btnTitle}) => {
    const dispatch = useDispatch()

    const editItemId = useSelector(selectEditItemId)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const inputTitleRef = useRef(null)
    const inputDescriptionRef = useRef(null)
    const inputStatusRef = useRef(null)

    useEffect(() => {
        inputTitleRef.current.focus()
    }, [])

    const titleInputHandler = (event) => {
        setTitle(event.target.value)
    }
    const descriptionInputHandler = (event) => {
        setDescription(event.target.value)
    }
    const statusInputHandler = (event) => {
        setStatus(event.target.value)
    }
    const addTodoData = useCallback(() => {
        if (!title) {
            inputTitleRef.current.focus()
            return
        }
        if (!description) {
            inputDescriptionRef.current.focus()
            return
        }
        if (!status) {
            inputStatusRef.current.focus()
            return
        }
        dispatch(addTodoItem({
            id: uuidv4(),
            title,
            description,
            status,
            creationDate: fullDate,
            updateDate: ''
        }))
        dispatch(showAddFormModal(false))
    }, [dispatch, title, description, status])

    const editTodoData = useCallback(() => {
        if (!title) {
            inputTitleRef.current.focus()
            return
        }
        if (!description) {
            inputDescriptionRef.current.focus()
            return
        }
        if (!status) {
            inputStatusRef.current.focus()
            return
        }
        dispatch(editTodoItem({
            id: editItemId,
            title,
            description,
            status,
            updateDate: fullDate
        }))
        dispatch(showEditFormModal(false))
    }, [dispatch, title, description, status])

    return (
        <div className="todo-modal">
            <div className="todo-modal__title">{titleHeader}</div>
            <label htmlFor="title">
                Title
                <input ref={inputTitleRef} onChange={titleInputHandler} value={title} id="title" type="text"/>
            </label>
            <label htmlFor="description">
                Description
                <input ref={inputDescriptionRef} onChange={descriptionInputHandler} value={description} id="description" type="text"/>
            </label>
            <label htmlFor="status">
                Status
                <select ref={inputStatusRef} onChange={statusInputHandler} value={status} id="status">
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
}