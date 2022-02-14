import React from 'react'
import {useState} from 'react'
import  Contrato  from "./Contrato.jsx";
import "./heroe.css"
import imagen1 from './1.png';
import imagen2 from './2.png';
import imagen3 from './3.png';
function Contrataunheroe() {
    const superHeros = [
        {
            nombre: "Spider",
            precio: 200,
            color:"red"
        },
        {
            nombre: "Captain",
            precio: 400,
            color:"blue"
        }
        ,
        {
            nombre: "Thor",
            precio: 300,
            color:"Gray"
        }
    ];
    const [total, setTotal]= useState(0);
    return (
    <>
    <h1>Total a Pagar:{total}$</h1>
    <div className="cajaPrincipal">
    <Contrato nombre={superHeros[0].nombre} precio={superHeros[0].precio} color={superHeros[0].color} setTotal={setTotal} imagen={imagen1}/>
    <Contrato nombre={superHeros[1].nombre} precio={superHeros[1].precio} color={superHeros[1].color} setTotal={setTotal} imagen={imagen2}/>
    <Contrato nombre={superHeros[2].nombre} precio={superHeros[2].precio} color={superHeros[2].color} setTotal={setTotal} imagen={imagen3}/>
    </div>
    </>
  )
}

export default Contrataunheroe