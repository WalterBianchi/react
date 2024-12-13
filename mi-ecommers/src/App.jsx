import './App.css'
import React from 'react'
import  NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

export const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListConteiner mensaje="mis productos"/>
    </>
  )
}


export default App;
