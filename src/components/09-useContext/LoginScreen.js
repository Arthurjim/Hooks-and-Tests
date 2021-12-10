import React,{useContext} from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    const sendUser =()=>{
        const user ={
            id:123,
            name:'Arturo',
            email:'arthurjim013@gmail.com'
        }
        setUser(user)
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
                <button className="btn btn-primary" onClick={sendUser}>
                    Ingresar
                </button>
        </div>
    )
}

export default LoginScreen