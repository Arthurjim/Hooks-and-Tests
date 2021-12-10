import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import {
    demoTodos,
    actionAdd,
    actionRemove,
    actionToogle,
} from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
    test("Debe de retornar el estado por defeco ", () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test("Debe de agregar un nuevo todo ", () => {
        const state = todoReducer(demoTodos, actionAdd);
        expect(state.length).toBe(3);
        const newTodo = {
            id: 3,
            desc: "Terminar este maldito curso",
            done: false,
        };
        expect(state).toEqual([...demoTodos, newTodo]);
    });
    test("Debe de eliminar un elemento ", () => {
        const state = todoReducer(demoTodos, actionRemove);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });
    test("Debe cambiar el estado de la tarea", () => {
        const state = todoReducer(demoTodos, actionToogle);
        expect(state[0].done).toBe(true);
        expect(state[1].done).toEqual(demoTodos[1].done);
    });
});
