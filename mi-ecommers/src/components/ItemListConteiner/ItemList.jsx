import React from 'react'

const ItemList = ({products}) => {

    console.log (products.map (e=> e. nombre))
    


    return (
    <div>
        {products.map ((e) => {
            return (
                <h3>
                    {e.nombre}
                </h3>
                
            )}
        )}
    </div>
    )
}

export default ItemList