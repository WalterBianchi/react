import { useState } from "react"




const Button =({text, color}) =>{

    const [ count, setCount] = useState (0)

    console.log ("se renderiza el componente")

    const click = () => {
        setCount (count+1)
        
    }

    return (
        <button style={{backgroundColor:color}}onClick={()=>click()}>{count}</button>
    )
}

export default Button