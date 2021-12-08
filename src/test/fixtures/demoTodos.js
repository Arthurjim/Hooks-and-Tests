export const demoTodos = [
    {
        id: 1,
        desc: "Tareas",
        donde: false,
    },
    {
        id: 2,
        desc: "Aprender node",
        donde: false,
    },
]; 

export const actionAdd={
    type:'ADD_TODO',
    payload:{
        id: 3,
        desc: "Terminar este maldito curso",
        donde: false,
    }
}