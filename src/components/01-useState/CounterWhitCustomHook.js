import React from 'react'
import useCounter from '../../hooks/useCounter';
import './counter.css'

const CounterWhitCustomHook = () => {
    const {state:counter,increment,decrement,reset}=useCounter(11);
  
    return (
        <>
         <h1>Counter with Hook : {counter}</h1>  
         <hr    />
         
          <button onClick={()=>increment(5)} className="btn btn-primary">+ 1</button>
          <button onClick={()=>decrement(5)} className="btn btn-danger">- 1</button>
          <buton onClick={()=>reset()} className="btn btn-info col-12">Reset</buton>
        </>
    )
}

export default CounterWhitCustomHook
