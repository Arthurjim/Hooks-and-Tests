import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos,actionAdd} from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
    test("Debe de retornar el estado por defeco ", () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos)
    });


    test("Debe de retornar el estado por defeco ", () => {
        const state = todoReducer(demoTodos,actionAdd);
        console.log(state)
        expect(state.length).toBe(3)
    });
});
