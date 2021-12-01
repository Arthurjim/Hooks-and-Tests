const initialState = [
   {
      id: 1,
      todo: "Comptrar pan",
      done: false,
   },
];

//los reducer siempre deben retornar el state
const todoReducer = (state = initialState, action) => {
//la action es la que modifica el state,es la unica manera
    if(action?.type ==="ADD_TODO"){
       return [...state, action.payload]
    }

   return state;
};

let todos = todoReducer();

const newTodo = {
   id: 2,
   todo: "Comprar leche",
   done: false,
};

const action = {
   type: "ADD_TODO",
   payload: newTodo,
};

todos = todoReducer(todos, action);
console.log(todos);
