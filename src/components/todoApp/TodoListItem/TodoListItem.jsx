import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, Button  } from '@mui/material';
import './TodoListItem.css'
import { fullDate } from "../../../utils/util";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import {removeTodoItem} from "../../../store/todoList/actions";
import {showEditFormModal} from "../../../store/app/actions";
import {useCallback, useMemo} from "react";
import {useNavigate} from "react-router-dom";

const TodoListItem = ({task}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id, title, description, status, creationDate, updateDate} = task

    const bgColor = useMemo(() => {
        return status === 'Done' ? '#4caf50' : status === 'Open' ? '#3f51b5' : status === 'In Progress' ? '#ffa733' : ''
    }, [status])

    const onDeleteHandler = useCallback(() => {
        dispatch(removeTodoItem(id))
    }, [dispatch, id])

    const showEditModalHandler = useCallback(() => {
        navigate(`edit-task/${id}`)
        dispatch(showEditFormModal(true, id))
    }, [dispatch, id])

    const boxStyle = {
        width: 1,
        minHeight: 130,
        backgroundColor: bgColor,
        borderRadius: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        '&:hover': {
            color: '#fff'
        },
    }

    return (
        <Box
            onDoubleClick={showEditModalHandler}
            title="Double click for edit"
            sx={boxStyle}
        >
            {title && <Typography align="center" variant="h6" component="div">Title: {title}</Typography>}
            {description && <Typography align="center" variant="h6" component="div">Description: {description}</Typography>}
            {status && <Typography align="center" variant="h6" component="div">Status: {status}</Typography>}
            {creationDate && <Typography align="center" variant="h6" component="div">Create todo date: {fullDate}</Typography>}
            {updateDate && <Typography align="center" variant="h6" component="div">Update todo date: {updateDate}</Typography>}
            <Button
                onClick={onDeleteHandler}
                variant="contained" startIcon={<DeleteIcon />}
                color="error"
                sx={{position: 'absolute', top: '10px', right: '10px'}}
            >
                Remove
            </Button>
        </Box>
    )
}

export default TodoListItem

TodoListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string,
        creationDate: PropTypes.string,
        updateDate: PropTypes.string
    })
}

TodoListItem.defaultProps = {
    task: PropTypes.shape({
        id: '',
        title: '',
        description: '',
        status: '',
        creationDate: '',
        updateDate: ''
    })
}
