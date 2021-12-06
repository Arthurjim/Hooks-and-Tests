import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
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
              <Link to="/">
                <button className="btn btn-primary" onClick={sendUser}>
                    Ingresar
                </button>
              </Link>
        </div>
    )
}

export default LoginScreen