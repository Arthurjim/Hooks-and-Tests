import {shallow} from 'enzyme'
import '@testing-library/jest-dom';
import TodoListItem from '../../../components/08-useReducer/TodoListItem'
import { demoTodos,actionAdd,actionRemove, actionToogle} from "../../fixtures/demoTodos";

describe('Pruebas en <todoListItem />', () => {
    const deleteTodo = jest.fn()
    const handleToogle = jest.fn()

    const wrapper = shallow(<TodoListItem key={0} item={demoTodos[0]} i={0} handleToogle={handleToogle} deleteTodo={deleteTodo} />)
    test('Debe de mostrasrse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe de llamar la funcion handleDelete ', () => {
        wrapper.find('button').simulate('click')
        // expect( deleteTodo ).toHaveBeenCalled();
        expect(deleteTodo).toHaveBeenCalledWith(1)
        //jest.fn()
        //toHaveBeenCalled
        //toHaveBeenCalledWith

    })
      
    test('Debe de llamar la funcion hadleToggle ', () => {
        wrapper.find('p').simulate('click')
        expect(handleToogle).toHaveBeenCalled()

        //jest.fn()
        //toHaveBeenCalledWith
    })
    test('Debe de mostrar el texto correctamente ', () => {
        
        expect(wrapper.find('p').text()).toBe(` 1. ${demoTodos[0].desc}`)
        // {`${i + 1}. ${item.desc}`}
    })
    test('Debe de tener la clase complete ', () => {
        const todo = demoTodos[0];
        todo.done = true
        const wrapper = shallow(<TodoListItem key={0} item={todo} i={0} handleToogle={handleToogle} deleteTodo={deleteTodo} />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
        // {`${i + 1}. ${item.desc}`}
    })
})
