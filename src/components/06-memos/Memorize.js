import React,{useState} from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small'
import '../05-useLayoutEffect/layout.css'
const Memorize = () => {
    const {counter,increment}=useCounter(10)
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr/>

            <button className="btn btn-outline-secondary" onClick={()=>increment(1)}>
                +1
            </button>
            <button
                className="btn btn-outline-danger ml-2"
                onClick={()=>{setShow(!show)}}    
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
