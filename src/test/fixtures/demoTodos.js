export const demoTodos = [
    {
        id: 1,
        desc: "Tareas",
        done: false,
    },
    {
        id: 2,
        desc: "Aprender node",
        done: false,
    },
]; 

export const actionAdd={
    type:'ADD_TODO',
    payload:{
        id: 3,
        desc: "Terminar este maldito curso",
        done: false,
    }
}


export const actionRemove={
    type:'REMOVE_TODO',
    payload:1
}

export const actionToogle={
    type:'TOGGLE_TODO',
    payload:1
}