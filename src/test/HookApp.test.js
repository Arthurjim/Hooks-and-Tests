import {shallow} from 'enzyme'
import HookApp from '../HookApp'
describe('Pruebas en el componente <HookApp />', () => {
    test('Debe coincidir el snapshot', () => {
        const wrapper = shallow(<HookApp />)
        expect(wrapper).toMatchSnapshot();
    })
    
})
