import { shallow } from "enzyme"
import TodoAdd from "../../../components/08-useReducer/TodoAdd"

describe('Pruebas en <TodoAdd/>', () => {
    const addTodo = jest.fn()
    const wrapper = shallow(<TodoAdd addTodo={addTodo}/>)
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        
    })
    test('No debe de llamar la fn addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}})
        expect(addTodo).toHaveBeenCalledTimes(0)
    });
    test('Debe de llamar la funcion addTodo', () => {
        
        const value = 'Hacer comida';
        wrapper.find('input').simulate('change', { target: { value,name:'description' } });

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect( addTodo ).toHaveBeenCalled();
        expect( addTodo ).toHaveBeenCalledWith(expect.any(Object)); // { }
        expect( addTodo ).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc:value,
            done:false,
        }); // { }
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
})
