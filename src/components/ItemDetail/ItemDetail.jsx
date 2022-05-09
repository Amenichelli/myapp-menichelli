import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
    }
    return (
        <div className='item-detail'>
            <div className='image'>
                <div className='img-detail-container'>
                    <img src= {item?.imagen} alt="Imagen del producto" />
                </div>
            </div>
            <div className='info'>
                <div className='info-container'>
                    <h2> {item?.nombre} </h2>
                    <h3> {item?.descripcion} </h3>
                    <h3> {item?.precio} </h3>
                    <div className='count-container'>
                    {cantidadDeProductos ?
                         <button className='compra'><Link to='/Cart'>Finalizar compra ({ cantidadDeProductos } items)</Link></button> :
                         <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail