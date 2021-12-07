import { shallow } from "enzyme"
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks"
import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Prueba al componentente MultipleCustomHooks', () => {
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })
 
    test('Debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })
    

    test('Debde de mostar la infomración ', () => {
        useFetch.mockReturnValue({
            data:[{
                author:'Arturo',
                quote:'TESTIIIING'
            }],
            loading:false,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-2').text().trim()).toBe('TESTIIIING')
        expect(wrapper.find('footer').text().trim()).toBe('Arturo')


        // console.log(.wrapper.html())
    })
    
})
