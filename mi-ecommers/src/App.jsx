import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/itemListContainer/itemListContainer'

import NavBar from './components/NavBar/NavBar'

function App() {


  const [valor, setValor] = useState (0)

  console.log ("se renderiza app")

  

  return (
    <>
    <NavBar valor= {valor}/>


    <ItemListContainer mensaje="entrega resuelta" fn={setValor}/>
    
    </>
  )
}

export default App
