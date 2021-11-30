import React, { useCallback, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import ShowIncrement from './ShowIncrement';

//El uso de el hook Callback se utilizar cunado nosotrs necesitamos mandar una
// funcion a un componete hijo
const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) =>{
        setCounter(c => c +num)
    },[setCounter]);
    
    useEffect(()=>{
        //Evita que se vuevla a ejecutar el useEffect
    },[increment])
    return (
        <div>
            <h1>useCallback Hooks: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHooks
