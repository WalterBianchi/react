import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/itemListContainer/itemListContainer'

import NavBar from './components/NavBar/NavBar'

function App() {

  console.log ("se renderiza app")

  return (
    <>
    <NavBar/>


    <ItemListContainer mensaje="entrega resuelta"/>
    
    </>
  )
}

export default App
