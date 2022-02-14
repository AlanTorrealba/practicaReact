import React,{useState} from 'react'
import "./App2.css"
import Heros from './Heros';
const App2 = () => {
 const [contador,setContador]= useState(0);
 const disminuir=()=>{
        setContador(contador-1);
 }
 const aumentar=()=>{
     setContador(contador+1);
}
const restablecer=()=>{
    setContador(0);
}
// parte dos
const [numero1,setNumero1]= useState();
const [numero2,setNumero2]= useState();
const [resultado,setResultado]= useState();

const suma=()=>{
    setResultado(Number(numero1)+Number(numero2));
}
const cambiar1 = (e) =>{
 setNumero1(e.target.value);
}
const cambiar2 = (e) =>{
    setNumero2(e.target.value);
   }
// parte tres
 const heros = [{nombre:"Spider", poder:"Sentido Aracnido"},
 {nombre:"Captain", poder:"Super Fuerza"},
 {nombre:"thor", poder:"Maljhorni"}
]
const [indice, setIndice]= useState(0);
const [mensaje, setMensaje]= useState();
const cambio = () =>{
setIndice(indice+1);
if (indice >=heros.length) {
    setIndice(0);
}
setMensaje(<span>el super poder de {heros[indice].nombre} es {heros[indice].poder} </span>)
}

    return (
        <>
        <h1>{contador}</h1>
        <button onClick={disminuir}>-</button>
        <button onClick={aumentar}>+</button>
        <button onClick={restablecer}>R</button>
       
          <div className='caja'>
              <input type="number" value={numero1} onChange={cambiar1}/>+
              <input type="number" value={numero2} onChange={cambiar2}/>=
              <input type="number" value={resultado} readOnly/>
              <button onClick={suma}>Sumar</button>
          </div>

          <div>
              <button onClick={cambio}>Cambio</button>
              <div>{mensaje}</div>
          </div>
       <Heros/>
        </>
        
  )
}

export default App2