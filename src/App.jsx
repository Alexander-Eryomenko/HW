import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Button from "./components/Button/Button";
import {headerTitle, addTodoButton, editTodoButton, modalTitleAdd, modalTitleEdit} from "./constants/constants";
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import {useCallback, useEffect, useState} from "react";
import TodoModal from "./components/TodoModal/TodoModal";



// const initialData = [
//     {
//         id: uuidv4(),
//         title: '',
//         description: 'Learn React',
//         status: 'Open',
//         creationDate: '',
//         updateDate: ''
//     },
//     {
//         id: uuidv4(),
//         title: '',
//         description: 'Learn Vue',
//         status: 'Done',
//         creationDate: '',
//         updateDate: ''
//     },
//     {
//         id: uuidv4(),
//         title: '',
//         description: 'Learn Angular',
//         status: 'In progress',
//         creationDate: '',
//         updateDate: ''
//     },
// ]

function App() {
    const [data, setData] = useState([])
    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [currentTaskId, setCurrentTaskId] = useState('')


    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('todo'))
        setData(dataFromLocalStorage)


    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(data))
    }, [data])

    const onAddTodoHandler = (objData) => {
        if(Object.keys(objData).length === 0) {
            setShowModalAdd(false)
            return
        }
        setData((prev) => {
            return [
                ...prev,
                objData
            ]
        })
        setShowModalAdd(false)
    }

    const onEditTodoHandler = (objData, id) => {
        if(Object.keys(objData).length === 0) {
            setShowModalEdit(false)
            return
        }

        const editTask = data.map(task => {
            return task.id === currentTaskId ? {
                ...task,
                title: objData.title,
                description: objData.description,
                status: objData.status,
                updateDate: objData.updateDate
            } : task
        })
        setData(editTask)


        setShowModalEdit(false)
    }

    const onDeleteHandler = (id) => {
        const filteredItem = data.filter((item) => item.id !== id)
        setData(filteredItem)
    }

    const showModalAddHandler = () => {
        setShowModalAdd(true)
    }

    const showModalEditHandler = (id) => {

        setShowModalEdit(true)
        setCurrentTaskId(id)

    }


  return (
    <Wrapper>
        {showModalEdit && <TodoModal titleHeader={modalTitleEdit} onAddEditTodoHandler={onEditTodoHandler} btnTitle={editTodoButton} todoData={data} />}
        {showModalAdd && <TodoModal titleHeader={modalTitleAdd} onAddEditTodoHandler={onAddTodoHandler} btnTitle={addTodoButton} />}
        <Header headerText={headerTitle} />
        <TodoList todoData={data} onDelete={onDeleteHandler} showEditModal={showModalEditHandler}/>
        <Button onClick={showModalAddHandler} className={"add-todo-button"} title={addTodoButton} />
    </Wrapper>
  );
}

export default App;
