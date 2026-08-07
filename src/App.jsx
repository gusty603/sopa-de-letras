import { useState } from 'react'
import './App.css'

function App() {
const [nombre, setNombre]=useState('')

const [arrayNombre, setArrayNombres]=useState([])
//llenar de nombre el array 
function cambiarNombres(e){
  e.preventDefault();
  setArrayNombres(arrayNombre.concat(nombre))
  
  setNombre('')
}
//creando tablero



  return (
    <>

    <div id='contenedor'>
      <div id='interno1'>
     <h1>Sopa de Letras</h1>
     <p>Ingresar hasta 10 palabras enter 3 y 12 caracteres</p>
 
 <form onSubmit={cambiarNombres}>
<input id='input'value={nombre} type="text" onChange={(e)=> setNombre(e.target.value.toUpperCase())} />
<input className='bot' type="submit" value="Enviar" />
 </form>
</div>
<div id='divPalabra'>
<h2>Palabras</h2>
{
arrayNombre.map((a,i)=> <li key={i}>{a}</li>)
  
}
<button className='bot'>Comenzar</button>
</div>
 </div>

{
 
}

    </>
    
  )
}

export default App
