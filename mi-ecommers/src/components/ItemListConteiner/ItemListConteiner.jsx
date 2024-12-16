import React,{useEffect, useState} from 'react'
import ItemList from './ItemList'
import {getProducts} from '../../data/Backend-falso';



const ItemListConteiner = ({mensaje}) => {

    const [productos, setProductos] = useState([])

    useEffect (() => {
        getProducts () 
        .then(res => setProductos (res))
        .catch(e => console.error (e))
        .finally (console.log ("promesa resuelta"))
    },[])




    return (
        <>
            <h2>{mensaje}</h2>
            <div>
                <ItemList productos={productos}/>
            </div>
        </>
    )
}

export default ItemListConteiner 