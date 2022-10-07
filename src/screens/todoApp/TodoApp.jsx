import Header from "../../components/Header/Header";
import TodoList from "../../components/todoApp/TodoList/TodoList";
import {addTodoButton, todoHeaderTitle, sortByTitleBtn, sortByStatusBtn, sortByDescriptionBtn} from "../../constants/constants";
import {Button} from "@mui/material";
import {useCallback, useMemo} from "react";
import { useSelector } from "react-redux";
import { selectTodoData } from "../../store/todoList/selectors";
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";

const TodoApp = () => {
    const textBtn = {
        status: sortByStatusBtn,
        description: sortByDescriptionBtn,
        title: sortByTitleBtn
    }
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();
    const sortType = searchParams.get('sort')

    const data = useSelector(selectTodoData)

    const showModalAddHandler = useCallback(() => {
        navigate('add-task')
    }, [])

    const dataToDisplay = useMemo(() => {
        if(!sortType) {
            return data
        }

        return [...data].sort((a,b) => {
            if(a[sortType] > b[sortType]) {
                return 1
            }
            if(a[sortType] < b[sortType]) {
                return -1
            }
            if(a[sortType] === b[sortType]) {
                return 0
            }
        })
    }, [data, sortType])

    return (
            <div>
                <Header textBtn={textBtn} headerText={todoHeaderTitle} />
                <TodoList todoData={dataToDisplay}/>
                <Button sx={{display: 'block', margin: '0 auto'}} onClick={showModalAddHandler} variant="contained">{addTodoButton}</Button>
                <Outlet />
            </div>
    )
}

export default TodoApp
