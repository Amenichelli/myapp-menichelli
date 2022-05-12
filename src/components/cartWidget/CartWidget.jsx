import React from "react"
import {NavLink} from 'react-router-dom'; 
import { useCartContext } from "../../store/CartContextProvider.jsx.jsx"
import cart from "./multi/carri.svg"

const CartWidget = () => {
    const { totalCount } = useCartContext()

    return (
        <NavLink to='/cart'>
             <img src={cart} className="cart-image" alt="carrito" />
             <span className="unidades">{totalCount()}</span>
        </NavLink>
    )
}
export default CartWidget
