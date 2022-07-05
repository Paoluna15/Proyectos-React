import React from "react";

let colores=["Rojo","Negro","Blanco","Rosado","Amarillo"]

return (
    <div>
    <p>Colores Favoritos</p>
    {colores.map((color) => <p>{color}</p>)}
    </div>
    
    )

    export default Array