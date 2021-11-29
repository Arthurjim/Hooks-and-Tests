import {useState} from 'react'

const useCounter = (intialState = 1) => {
    const [counter, setCounter] = useState(intialState);

    const increment = (factor = 1) => {
        setCounter(counter + factor )
    };

    const decrement = (factor =1) => {
        setCounter(counter - factor )
    }
    const reset = () => {
        setCounter(intialState)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter
