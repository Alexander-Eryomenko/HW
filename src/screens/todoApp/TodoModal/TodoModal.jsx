import {useState, useRef, useEffect, useCallback, useMemo} from "react";

import './TodoModal.css'

import {addTodoButton} from "../../../constants/constants";

import {fullDate} from "../../../utils/util"

import {addTodoItem, editTodoItem} from "../../../store/todoList/actions";
import {selectTodoData} from "../../../store/todoList/selectors";

import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams } from 'react-router-dom'
import {Button, Typography, TextField} from '@mui/material'

const optionStatus = ['Open', 'Done', 'In Progress']

const TodoModal = ({titleHeader, btnTitle}) => {
    const dispatch = useDispatch()
    const { itemId } = useParams()

    const navigate = useNavigate()

    const todoData = useSelector(selectTodoData)

    const element = useMemo(() => {
        if(!itemId) {
            return null
        }
        return todoData.find(item => item.id === itemId)
     }, [itemId, todoData] )

    const [title, setTitle] = useState(element ? element.title : '')
    const [description, setDescription] = useState(element ? element.description : '')
    const [status, setStatus] = useState(element ? element.status : '')

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
        navigate('/todo-app')
    }, [dispatch, navigate, title, description, status])

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
            id: itemId,
            title,
            description,
            status,
            updateDate: fullDate
        }))
        navigate('/todo-app')
    }, [dispatch, navigate, title, description, status])

    return (
        <div className="todo-modal">
            <Typography align="center" variant="h6" component="div">{titleHeader}</Typography>
            <TextField
                inputRef={inputTitleRef}
                onChange={titleInputHandler}
                value={title}
                sx={{width: 400}}
                type="text"
                id="title"
                placeholder="Enter title"
                size="small"
                label="Title"
                variant="outlined"
            />
            <TextField
                inputRef={inputDescriptionRef}
                onChange={descriptionInputHandler}
                value={description}
                sx={{width: 400}}
                type="text"
                id="description"
                placeholder="Enter description"
                size="small"
                label="Description"
                variant="outlined"
            />
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
            <Button
                color="success"
                onClick={btnTitle === addTodoButton ? addTodoData : editTodoData}
                sx={{maxWidth: 128, margin: '0 auto'}}
                variant="contained"
            >{btnTitle}
            </Button>
        </div>
    )
}
export default TodoModal


TodoModal.propTypes = {
    titleHeader: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
}
