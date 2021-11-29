import {useEffect, useRef, useState} from 'react'

const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({data:null,loading:true, error:null})
    
    useEffect(()=>{

        return()=>{
            isMounted.current = false;
        }
    },[])
    useEffect(() => {

        setState({data:null,loading:true, error:null})
        
        fetch(url)
        .then(resp => resp.json())
        .then(data=>{
            setTimeout(()=>{
                if(isMounted.current){
                    setState({data:data, loading:false, error:null})
                }

            },4000)
        })
    },[url])

    return state;
}

export default useFetch
