import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Button from "./components/Button/Button";
import TodoModal from "./components/TodoModal/TodoModal";

import './App.css';

import {headerTitle, addTodoButton, editTodoButton, modalTitleAdd, modalTitleEdit} from "./constants/constants";

import {selectIsAddModalVisible, selectIsEditModalVisible} from "./store/app/selectors";
import {selectTodoData} from "./store/todoList/selectors";
import {showAddFormModal} from "./store/app/actions";
import {setDataFromLocalStorage} from "./store/todoList/actions";


const App = () => {
    const data = useSelector(selectTodoData)
    const isShowAddModal = useSelector(selectIsAddModalVisible)
    const isShowEditModal = useSelector(selectIsEditModalVisible)
    const dispatch = useDispatch()

    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('todo'))
        setDataFromLocalStorage(dataFromLocalStorage)
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(data))
    }, [data, isShowAddModal, isShowEditModal])

    const showModalAddHandler = useCallback(() => {
        dispatch(showAddFormModal(true))
    }, [dispatch])

  return (
    <Wrapper>
        {isShowEditModal && <TodoModal titleHeader={modalTitleEdit} btnTitle={editTodoButton} />}
        {isShowAddModal && <TodoModal titleHeader={modalTitleAdd} btnTitle={addTodoButton} />}
        <Header headerText={headerTitle} />
        <TodoList todoData={data}/>
        <Button onClick={showModalAddHandler} className={"add-todo-button"} title={addTodoButton} />
    </Wrapper>
  );
}

export default App;
