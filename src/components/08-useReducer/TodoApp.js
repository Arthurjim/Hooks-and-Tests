import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useEffect } from "react/cjs/react.development";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
// const initialState = [
//     {
//         id: new Date().getTime(),
//         desc: "Learn React",
//         done: false,
//     },
// ];

const init = () => {
    // return[{
    //     id: new Date().getTime(),
    //     desc: "Learn React",
    //     done: false,
    // }]
    return JSON.parse(localStorage.getItem("todos") || "[]");
};
const TodoApp = () => {
    //Initi ayuda para computar los datos y evitar que se este ejecutando el useReducer cada que haya cambios
    const [todos, dispatch] = useReducer(todoReducer, [], init);
  
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

 
    const addTodo = (todo) => {
        dispatch({ type: "ADD_TODO", payload: todo });
    };
    const handleToogle = (id) => {
        const action = {
            type: "TOGGLE_TODO",
            payload: id,
        };
        dispatch(action);
    };
    const deleteTodo = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        });
    };
    return (
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToogle={handleToogle}
                        deleteTodo={deleteTodo}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd addTodo={addTodo}/>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
