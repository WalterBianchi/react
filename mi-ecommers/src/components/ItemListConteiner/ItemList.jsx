import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {

    console.log(productos.map(elemento => elemento.nombre))


    return (
        <div>
            {productos.map((elemento)=> {
            return (
                <Item elemento={elemento}/>
            )
        }
        )}
        </div>

    )
}

export default ItemList