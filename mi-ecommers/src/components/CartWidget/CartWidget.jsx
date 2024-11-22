import React from 'react'
import { FiShoppingCart } from "react-icons/fi"



const CartWidget = ({valor}) => {
    return (
        <div>
        <FiShoppingCart />
            <span>{valor}</span>
        </div>
        
    )
}

export default CartWidget