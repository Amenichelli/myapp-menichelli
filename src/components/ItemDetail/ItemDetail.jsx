import React, { useState } from 'react';
import "./ItemDetail.css"
import GoToCart from "../GoToCart/GoToCart";
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../store/CartContextProvider.jsx';
import {Card, Button } from "react-bootstrap";

const ItemDetail = ({ item }) => {
    const { stock, id } = item;
    const [countToAdd, setCountToAdd] = useState(0);
    const { addToCart, unitsPerProduct } = useCartContext ();

    const handleOnAdd = (count) => {
        if (count + unitsPerProduct(id) > stock) {
            const availableToAdd = stock - unitsPerProduct(id);
            return alert ('Solamente se puede agregar' + {availableToAdd}+ 'productos');
        }
        setCountToAdd(count);
        addToCart(item, count);
    };
    
    return (
     
        <div className='box'>
        <Card className="bg-dark text-white">
        <Card.Img src={item?.imagen} alt="Imagen del producto" />
        <Card.ImgOverlay>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
             {item.descripcion}
             {item.precio}
             {item.stock}
         </Card.Text>
        <Card.Text className='sup-card'>
            <div className='count-container'>
                {countToAdd === 0 ? (
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                            ) : ( <GoToCart /> 
                            )} 
             </div>
        </Card.Text> 
           
    </Card.ImgOverlay>
        </Card>
        </div>
      
    )
}
{/* <Card className="bg-dark text-white">
  <Card.Img src={item?.imagen} alt="Imagen del producto" />
  <Card.ImgOverlay>
    <Card.Title>{item.nombre}</Card.Title>
    <Card.Text>
      {item.descripcion}
      <br>{item.precio} </br>
      <br>{item.stock}</br> 
    <Card.Text>{countToAdd === 0 ? (
                     <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                            ) : ( <GoToCart /> 
                            )}</Card.Text>
  </Card.ImgOverlay>
</Card> */}
export default ItemDetail