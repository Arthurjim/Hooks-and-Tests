import React from 'react'
import PropTypes from 'prop-types'

//No podemos utlizar solo el memo para evitar que se vuevla a gnenerar el componente
//Por que cada que se actualizar el state de en counter, se vuelve a crear un nuevo esapcion en memoria
// de la funcion, (funcion nueva), para eso creamos un useCallback también
const ShowIncrement = React.memo(({increment}) => {
    console.log('Me volví a generar :(')
    return (
        <button className="btn btn-primary"
            onClick={() => {increment(5)}}
        >
            +1
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
export default ShowIncrement
