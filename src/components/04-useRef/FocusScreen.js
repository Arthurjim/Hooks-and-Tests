import React, { useRef } from 'react'
import '../03-examples/exampe..css'
const FocusScreen = () => {
    const inputRef = useRef();
    // console.log(ref);
    // ref nos srive para cmabiar el valor de una referencia sin disparar una redenirzacion
    const handleClick = () => {
        inputRef.current.select();
        // document.querySelector('input').select()
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                type="text" 
                ref={inputRef}
                className="form-control" 
                placeholder="Su nombre" 
            />

            <button 
                className="btn btn-outline-primary mt-5 col-12"
                onClick={handleClick}
            >Focuuuus</button>
        </div>
    )
}

export default FocusScreen
