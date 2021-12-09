const { shallow } = require("enzyme")
import TodoList from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en <TodoList />', () => {
    const deleteTodo = jest.fn()
   const handleToogle = jest.fn()
   const wrapper = shallow(<TodoList todos={demoTodos} deleteTodo={deleteTodo} handleToogle={handleToogle} />)
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de tener todos los TodoListItem que se encuentren en el array ', () => {
        // expect(wrapper.find('TodoListItem'))
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('deleteTodo')).toEqual(expect.any(Function))
    })
    
    
})
