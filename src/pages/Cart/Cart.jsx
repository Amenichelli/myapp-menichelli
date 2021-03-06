import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem.jsx';
import { useCartContext } from '../../store/CartContextProvider.jsx'
import {Badge} from 'react-bootstrap'

const Cart = () => {
  const {cartList, emptyCart, totalPrice } = useCartContext()
  
  return <div className='cart-inventory'>
    {cartList.map(item => (
       <CartItem key={item.id} item={item} />))}
    {cartList.length > 0 ?(
      <> 
      {<button className='btn-inventory' onClick={() => emptyCart()}>Limpiar Carrito</button> }
      <div className='total'>
        <h4 >Total: ${totalPrice()}</h4>
      </div>
      <Link to='/checkout'>
        <Badge pill bg="dark">
          Finalizar compra
        </Badge>
      </Link>
      
      </>
      ) : ( <h2>El carrito está vacío</h2> )

    }

    </div>
};

export default Cart;