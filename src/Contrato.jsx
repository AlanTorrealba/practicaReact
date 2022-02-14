import React from 'react'

function Contrato({ nombre, precio, color, setTotal, imagen}) {
    const comprar = (elemento)=>{
        setTotal((e)=> e+precio);
        elemento.target.parentNode.parentNode.style.display="none"
    };
    return (
        <> 
        <div className="heroe" style={{backgroundColor:color}}>
            <div><h1>{nombre}</h1></div>
            <img src={imagen} alt="" srcset="" />
            <div className="titulo">Precio:</div>
            <div className="precio">{precio}</div>
            <div>
                <button onClick={comprar}>
                    Comprar
                </button>
            </div>
        </div>
        </>
    )
}

export default Contrato