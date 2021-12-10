import { mount, shallow } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Preubas en <LoginScreen />", () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    )


    test("Debe de mostrarse correctamen", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test("Debe de ejecutar el setUser con el argumento esperado", () => {
        const user = {
            id: 123,
            name: "Arturo",
            email: "arthurjim013@gmail.com",
        };
        wrapper.find("button").prop("onClick")();
        expect(setUser).toHaveBeenCalledWith(user);
    });
});
