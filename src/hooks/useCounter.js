import {useState} from 'react'

const useCounter = (intialState = 1) => {
    const [counter, setCounter] = useState(intialState);

    const increment = () => {
        setCounter(counter + 1 )
    };

    const decrement = () => {
        setCounter(counter - 1 )
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
