import React from 'react'

const Button = ({text,color}) => {
    return (
        <div style={{backgroundColor:color}}>{text}</div>
    )
}

export default Button