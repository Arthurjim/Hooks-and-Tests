import {useState} from 'react'

const useCounter = (intialState = 10) => {
    const [state, setState] = useState(intialState);

    const increment = (factor = 1) => {
        setState(state + factor )
    };

    const decrement = (factor =1) => {
        setState(state - factor )
    }
    const reset = () => {
        setState(intialState)
    }
    return {
        state,
        increment,
        decrement,
        reset
    }
}

export default useCounter
