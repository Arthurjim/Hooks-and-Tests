import React,{useState, useMemo} from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import useCounter from '../../hooks/useCounter'
import '../05-useLayoutEffect/layout.css'
const MemoHook = () => {
    const {counter,increment}=useCounter(5000)
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small>  </h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
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

export default MemoHook;
