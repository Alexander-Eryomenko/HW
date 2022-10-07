import {useState, useRef, useEffect, useCallback, useMemo} from "react";

import './TodoModal.css'

import { addTodoButton } from "../../constants/constants";
import {selectAllGoods, selectIsDataAdding} from "../../store/goods/selectors";

import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'
import {Button, Typography, TextField} from '@mui/material'
import {createItemThunk, updateGoodsThunk} from "../../store/goods/thunks";

const GoodsFormModal = ({titleHeader, btnTitle}) => {
    const dispatch = useDispatch()
    const { itemId } = useParams()

    const navigate = useNavigate()

    const todoData = useSelector(selectAllGoods)

    const element = useMemo(() => {
        if(!itemId) {
            return null
        }
        return todoData.find(item => item.id === itemId)
    }, [itemId, todoData] )

    const [title, setTitle] = useState(element ? element.title : '')
    const [description, setDescription] = useState(element ? element.description : '')
    const [weight, setWeight] = useState(element ? element.weight : '')

    const inputTitleRef = useRef(null)
    const inputWeightRef = useRef(null)
    const inputDescriptionRef = useRef(null)

    useEffect(() => {
        inputTitleRef.current.focus()
    }, [])

    const titleInputHandler = (event) => {
        setTitle(event.target.value)
    }
    const descriptionInputHandler = (event) => {
        setDescription(event.target.value)
    }
    const weightInputHandler = (event) => {
        setWeight(event.target.value)
    }

    const addGoods = useCallback(() => {
        if (!title) {
            inputTitleRef.current.focus()
            return
        }
        if (!description) {
            inputDescriptionRef.current.focus()
            return
        }
        if (!weight) {
            inputWeightRef.current.focus()
            return
        }
        const obj = {
            id: (Math.random() * 123).toString(),
            title,
            description,
            weight
        }
        dispatch(createItemThunk(obj))
        navigate('/goods-app')
    }, [dispatch, navigate, title, description, weight])

    const editGoods = useCallback(() => {
        if (!title) {
            inputTitleRef.current.focus()
            return
        }
        if (!description) {
            inputDescriptionRef.current.focus()
            return
        }
        if (!weight) {
            inputWeightRef.current.focus()
            return
        }
            dispatch(updateGoodsThunk(itemId, {
                title,
                description,
                weight
            }))
        navigate('/goods-app')
    }, [dispatch, navigate, title, description, weight])

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
            <TextField
                inputRef={inputWeightRef}
                onChange={weightInputHandler}
                value={weight}
                sx={{width: 400}}
                type="text"
                id="weight"
                placeholder="Enter weight"
                size="small"
                label="Weight"
                variant="outlined"
            />
            <Button
                color="success"
                onClick={btnTitle === addTodoButton ? addGoods : editGoods}
                sx={{maxWidth: 128, margin: '0 auto'}}
                variant="contained"
            >
                {btnTitle}
            </Button>
        </div>
    )
}
export default GoodsFormModal


GoodsFormModal.propTypes = {
    titleHeader: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
}
