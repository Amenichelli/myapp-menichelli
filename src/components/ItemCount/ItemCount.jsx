import "../ItemCount/ItemCount.css";
import  {useEffect, useState } from 'react';

 function ItemCount({ stock, initial, onAdd}) {
    const [cont, setCont] = useState(initial);

function handleMas(){
    if (cont < stock) {
        setCont (cont + 1)
    }
}
function handleMenos(){
    if (cont > initial) {
        setCont (cont - 1)
    }
}
return(
    <div className="item-cont">
        <div>
            <button className="btn-handle" onClick={() => handleMenos()}>-</button>
            <input className="read" readOnly value={cont} />
            <button className="btn-handle" onClick={() => handleMas()}>+</button>
        </div>
        <button onClick={() => (cont <= stock) && onAdd(cont)}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount



