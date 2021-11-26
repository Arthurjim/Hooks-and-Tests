import React,{useEffect, useState}from 'react'

const Message = () => {
    const [coords,setCoords]=useState({x:0,y:0})
    const {x,y}=coords
    useEffect(() => {
        //cuerpo del efecto
        const mouseMove = (e)=>{
            const cords = {x:e.x,y:e.y}
            setCoords(cords)
        }
        window.addEventListener('mousemove',mouseMove)
        console.log('Componente montado')
        return () => {
            //fase de limpieza
            console.log('Componente desmontado')
            window.removeEventListener('mousemove',mouseMove)
        }
    }, [])
    return (
        <div>
           <h3>{`Cords x = ${x}`}</h3> 
           <h3>{`Cords y = ${y}`}</h3> 

        </div>
    )
}

export default Message;
