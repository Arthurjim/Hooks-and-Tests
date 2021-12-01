import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({addTodo}) => {
    const [{ description }, handleChange, reset] = useForm({
        description: "",
    });
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
        addTodo(newTodo)
        reset();

    }
    return (
        <>
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
        </>
    );
};

export default TodoAdd;
