import React,{useState} from 'react'
import '../03-examples/exampe..css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
const RealExampleRefs = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {show && <MultipleCustomHooks />}
            <button className="btn btn-primary mt-5"
            onClick={()=>{setShow(!show)}}>
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default RealExampleRefs