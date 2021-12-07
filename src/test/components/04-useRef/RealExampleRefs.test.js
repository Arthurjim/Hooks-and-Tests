import { shallow } from "enzyme"
import RealExampleRefs from '../../../components/04-useRef/RealExampleRefs'
describe('Preubas en el componente RealExampleRefs', () => {
    const wrapper = shallow(<RealExampleRefs />)
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

        
    })

    test('Debe de mostrar el componenet <MultipleCustomHook />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
        
    })
    
    
})
