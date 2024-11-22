import React from 'react'

const ItemList = ({products}) => {

    console.log (products.map (elemento => elemento.nombre))


    return (
    <div>
        {products.map ((elemento)=> {
            return (
                <h3>
                    {elemento.nombre}
                </h3>
                
            )}
        )}
    </div>
    )
}

export default ItemList