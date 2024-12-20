import './App.css'
import React from 'react'
import  NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemList from './components/ItemListConteiner/ItemList'
import Item from './components/ItemListConteiner/Item'

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
        
        </Routes>
    </BrowserRouter>


    <ItemListConteiner mensaje="Bicicletas de triatlon"/>
    </>
  )
}


export default App;
