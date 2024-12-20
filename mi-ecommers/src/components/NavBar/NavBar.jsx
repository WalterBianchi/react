import React from 'react'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import ItemListConteiner from '../ItemListConteiner/ItemListConteiner';
import ItemList from '../ItemListConteiner/ItemList';

const NavBar = () => {
    return (
    <nav>

    <h1> <Link to= "/">BikeShop </Link> </h1>
    <button> Trek</button>
    <button>Canyon</button>
    <button>Cervelo</button>
    <button>Specialized</button>
    
    </nav>
    )
}

export default NavBar