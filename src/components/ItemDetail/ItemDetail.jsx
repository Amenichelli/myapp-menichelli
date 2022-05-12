import React, { useState } from 'react';
import "./ItemDetail.css"
import GoToCart from "../GoToCart/GoToCart";
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../store/CartContextProvider.jsx';

const ItemDetail = ({ item }) => {
    const { stock, id } = item;
    const [countToAdd, setCountToAdd] = useState(0);
    const { addToCart, unitsPerProduct } = useCartContext ();

    const handleOnAdd = (count) => {
        if (count + unitsPerProduct(id) > stock) {
            const availableToAdd = stock - unitsPerProduct(id);
            return alert ('Solamente se puede agregar ${availableToAdd} productos');
        }
        setCountToAdd(count);
        addToCart(item, count);
    };
    
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
                    <h3> {item?.stock} </h3>
                    <div className='count-container'>
                    {countToAdd === 0 ? (
                     <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                            ) : ( <GoToCart /> 
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail