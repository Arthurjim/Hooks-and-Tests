import React from "react";
import propTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos,deleteTodo,handleToogle}) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((item, i) => (
                <TodoListItem key={item.id} item={item} i={i} handleToogle={handleToogle} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: propTypes.array.isRequired,
    deleteTodo: propTypes.func.isRequired,
    handleToogle: propTypes.func.isRequired
}
TodoList.defaultProps = {
    todos:[]
}

export default TodoList;
