import { mount } from "enzyme"
import AppRouter from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('Pruebas en el <AppRouter />', () => {
    const user={
        user:1,
        name:'Arturo'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>

    )
    test('Debe de mostrasre correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
