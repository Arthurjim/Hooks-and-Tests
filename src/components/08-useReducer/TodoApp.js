import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import useForm from "../../hooks/useForm";
import { useEffect } from "react/cjs/react.development";
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
    const [{ description }, handleChange, reset] = useForm({
        description: "",
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length < 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        const action = {
            type: "ADD_TODO",
            payload: newTodo,
        };
        dispatch(action);
        reset();
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
            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map((item, i) => (
                            <li className="list-group-item " key={item.id}>
                                <p
                                    className={item.done && "complete"}
                                    onClick={() => handleToogle(item.id)}
                                >
                                    {" "}
                                    {`${i + 1}. ${item.desc}`}
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(item.id)}
                                >
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprenderr ..."
                            autoComplete="off "
                            onChange={handleChange}
                            value={description}
                            id="input"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 col-12"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
