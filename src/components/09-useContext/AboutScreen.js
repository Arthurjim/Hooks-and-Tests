import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
    const {user, setUser} = useContext(UserContext)
    const handleClcik =()=>{
        setUser({})
    }
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null,3)}
            </pre>
            <button className="bnt btn-secondary" onClick={handleClcik}>
                Logout
            </button>
        </div>
    )
}

export default AboutScreen