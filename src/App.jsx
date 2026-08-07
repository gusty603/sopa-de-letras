import { useState } from 'react'
import './App.css'

function App() {
const [nombre, setNombre]=useState('')

const [arrayNombre, setArrayNombres]=useState([])
//llenar de nombre el array 
function asignarNombres(e){
  e.preventDefault();
  setArrayNombres(arrayNombre.concat(nombre.toUpperCase()))
  
  setNombre('')
}
//creando tablero ------
const tablero=[]
for(let fila=0;fila<10;fila++){
let  filaArray=[]
  for(let col = 0; col <10; col++){
filaArray.push("")
  }
  tablero.push(filaArray)
}
const [tablero1, setTablero1]=useState(tablero);
//-------

  return (
    <>

    <div id='contenedor'>
      <div id='interno1'>
     <h1>Sopa de Letras</h1>
     <p>Ingresar hasta 10 palabras enter 3 y 12 caracteres</p>
 
 <form onSubmit={asignarNombres}>
<input id='input'value={nombre} type="text" onChange={(e)=> setNombre(e.target.value)} />
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


  <div className='tablero'>   
 {tablero.map((fila,i)=>
                         fila.map((col,c)=>(
                         <div className='celda' key={`${i}-${c}`}>{col}</div> )))}
  </div>


    </>
    
  )
}

export default App
