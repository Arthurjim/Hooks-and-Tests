import { shallow,mount } from "enzyme"
import { act } from "@testing-library/react"
import TodoApp from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from "../../fixtures/demoTodos"

//Mount se utiliza cunado se necesita probar toda la aplicacion en general 

describe('Pruebas en TodoApp', () => {
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(()=>{});
    test('Debe de  mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />)
        act(()=>{
            wrapper.find('TodoAdd').prop('addTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('addTodo')(demoTodos[1])
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    });
    
    test('Debe eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('addTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('deleteTodo')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 0');


    })
    

    
})
