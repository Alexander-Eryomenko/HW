import React from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import WelcomePage from "./screens/WelcomePage";
import TodoApp from "./screens/todoApp/TodoApp";
import GoodsApp from "./screens/goodsApp/GoodsApp";
import TodoModal from "./screens/todoApp/TodoModal/TodoModal";
import GoodsFormModal from "./screens/goodsApp/GoodsFormModal";
import NotFoundPage from "./screens/NotFoundPage";

import './App.css';

import {addTodoButton, editTodoButton, modalTitleAdd, modalTitleEdit} from "./constants/constants";

import {Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <Wrapper>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/todo-app" element={<TodoApp />}>
                <Route path="edit-task/:itemId" element={<TodoModal titleHeader={modalTitleEdit} btnTitle={editTodoButton} />} />
                <Route path="add-task" element={<TodoModal titleHeader={modalTitleAdd} btnTitle={addTodoButton} />} />
            </Route>
            <Route path="/goods-app" element={<GoodsApp />}>
                <Route path="edit-goods/:itemId" element={<GoodsFormModal titleHeader={modalTitleEdit} btnTitle={editTodoButton} />}/>
                <Route path="add-goods" element={<GoodsFormModal titleHeader={modalTitleAdd} btnTitle={addTodoButton} />}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Wrapper>
  );
}

export default App;
