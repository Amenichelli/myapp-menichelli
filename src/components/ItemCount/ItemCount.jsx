import "../ItemCount/ItemCount.css";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button'

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
        <Button variant="dark" className="btn-handle" onClick={() => handleMenos()} >-</Button>{' '}
            <input className="read" readOnly value={cont} />
            <Button variant="dark" className="btn-handle" onClick={() => handleMas()} >+</Button>{' '}
        </div>
        <Button variant="secondary" size="lg" onClick={() => (cont <= stock) && onAdd(cont)}>Agregar al carrito</Button>
    </div>
)
}

export default ItemCount



