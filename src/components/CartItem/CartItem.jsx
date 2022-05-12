import React from 'react'
import { useCartContext } from '../../store/CartContextProvider.jsx';

export const CartItem = ({item}) => {
    const { deleteById, removeOneUnit  } = useCartContext();
    const { nombre, precio, quantity, id } = item;
  return (
    <div>
        <h2>{nombre}</h2>
        <h3>Unidades: {quantity}</h3>
        <h4> Precio unitario: ${precio}</h4>
        <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
        <button onClick={() => deleteById(item.id)}>Quitar</button>
    </div>
  );
};

export default CartItem
