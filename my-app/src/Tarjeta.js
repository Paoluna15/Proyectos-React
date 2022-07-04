import React,{useState} from "react";

function Tarjeta(props){

    //let edad=29

    const [edad,setEdad]=useState(20)

    function incrementaredad(){
      setEdad(edad+1)
      
    }
    function disminuiredad(){
        setEdad(edad-1)
    }

    return (
    <div>
    <h1>Info recibida {props.nombreTarjeta}</h1>
    <h1>Titulo de la tarjeta</h1>
    <p>Descripcion de la tarjeta</p>
    <p>edad:{edad}</p>

    <button onClick={incrementaredad}>Aumentar edad</button>
    <button onClick={disminuiredad}>Disminuir edad</button>
    </div>
    )
    }
    export default Tarjeta