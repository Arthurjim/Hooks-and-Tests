import useForm from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en use Form", () => {
    const initialForm = {
        name: "Arturo",
        email: "arturo@gmail.com",
    };
    test("Debe de regresar un formulario por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });
    test("Debe de cambiar el valor del formulario (cambiar name)", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Fernando",
                },
            });
        });
        const [value] = result.current;
        expect(value.name).toBe("Fernando");
        expect(value).toEqual({...initialForm, name:'Fernando'})
    });

    test("Debe de re-establece el formulario con REST ", () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange,reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Fernando",
                },
            });
            reset()

        });
        const [value] = result.current;
        expect(value).toEqual(initialForm)


    });
});
