import React from "react";
const TodoListItem = ({item,i,handleToogle,deleteTodo}) => {
    return (
        <li className="list-group-item " key={item.id}>
            <p
                className={item.done ? "complete" : ""}
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
    );
};

export default TodoListItem;
