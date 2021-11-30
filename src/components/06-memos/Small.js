import React,{memo} from 'react'

const Small = memo(({value}) => {
    console.log('Me volví a  llamar')
    return (
        <small>
            {value}
        </small>
    )
})

export default Small;