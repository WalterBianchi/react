import React from 'react'

const Item = ({elemento}) => {
    return (
    <div>
        <img src={elemento.img} alt="Bike" width={"300px"} heigth={"250px"}/>
        <h3>
        {elemento.nombre}
        </h3>
        <p>
        Precio:${elemento.precio}
        </p>
    </div>
    )
}

export default Item