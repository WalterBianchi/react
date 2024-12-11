import React,{useEffect, useState} from 'react'
import Button from '../Button/Button'
import ItemList from './ItemList'
import { getProducts } from '../../data/Backend-falso'



const ItemListContainer = ({mensaje, fn}) => {
    const [products, setProducts]= useState ([])

    useEffect (() => {
        getProducts ()
        .then(res => console.log(res))
        .catch(rej => console.error(rej))
        .finally( console.log("se resolvio la promesa"))
    }, [])


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