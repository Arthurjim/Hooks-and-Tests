import useCounter from '../../hooks/useCounter'
import { renderHook,act } from "@testing-library/react-hooks";
describe("Preuba en useCounter", () => {
    test("Debe de retornar valores por defect", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });

    test("Debe de tiener el counter en 100", () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
      
    });

    test('Debe de incrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter());
        const {increment} = result.current;
        act(()=>{
            increment()
        })
        const {counter} = result.current;
        expect(counter).toBe(2)


    })
    test('Debe de decrementar el counter en -1 ', () => {
        const { result } = renderHook(() => useCounter(10));
        const {decrement} = result.current;
        act(()=>{
            decrement()
        })

        const {counter} = result.current;
        expect(counter).toBe(9)
    })

    test('Debe de restaurar el counter ', () => {
        const { result } = renderHook(() => useCounter(10));
        const {decrement,reset} = result.current;
        act(()=>{
            decrement()
            reset()
        })

        const {counter} = result.current;
        expect(counter).toBe(10)
    })
    
    
});
