import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const [nombre, setNombre]=useState('')

const [arrayNombre, setArrayNombres]=useState([])

function cambiarNombres(e){
  e.preventDefault();
  setArrayNombres(arrayNombre.concat(nombre))
  console.log(arrayNombre)
  setNombre('')
}

  return (
    <>
    <div id='contenedor'>
      <div>
     <h1>Sopa de Letras</h1>
     <p>Ingresar hasta 10 palabras enter 3 y 12 caracteres</p>
 

 <form onSubmit={cambiarNombres}>
<input type="text"value={nombre} onChange={(e)=> setNombre(e.target.value)} />
<input type="submit" value="Enviar" />
 </form>
</div>
<div id='divPalabra'>
<h2>Palabras</h2>
{
arrayNombre.map((a,i)=> <li key={i}>{a}</li>)
  
}
</div>
 </div>
 
    </>
    
  )
}

export default App
