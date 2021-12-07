
import { renderHook,act } from "@testing-library/react-hooks";
import useFetch from '../../hooks/useFetch'
describe('Preuba en useFetch', () => {
    
    test('Debe de retornar la data por defecto', () => {
        const {result} = renderHook(()=> useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
        const {data,loading,error} = result.current;
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })

    test('Debe obtener la data desdeada,  ', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
        await waitForNextUpdate({ timeout: 5000 });

        const {data,loading,error} = result.current;
        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(null)
    })
    
    test('Debe de manejar el error,  ', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetch(`https://reqres.in/api/as1df/users?page=2`))
        await waitForNextUpdate({timeout:10000});
        const {data,loading,error} = result.current;
        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe('No se pudo cargar la info')
    })
})
