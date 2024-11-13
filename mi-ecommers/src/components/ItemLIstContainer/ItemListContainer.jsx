import React,{useEffect, useState} from 'react'
import Button from '../Button/Button'
import { getProducts } from '../../data/asyncMonck'



const ItemListContainer = ({mensaje, fn}) => {
    const [products, setProducts]= useState ([s])


    return (
        <>
        <div>
        <div>{mensaje}</div>
        <Button fn={fn} text= "agregar al carrito"/>
        </div>
        <div>
            <ItemList products={products}/>
        </div>
        </>
    )
}

export default ItemListContainer