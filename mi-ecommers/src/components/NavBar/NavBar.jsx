import React from 'react'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
    <nav>
    <h1>BikeShop</h1>
    <Button text="Trek" color="blue"/>
    <Button text="Canyon" color="blue"/>
    <Button text="Cervelo" color="blue"/>
    <CartWidget/>
    </nav>
    )
}

export default NavBar