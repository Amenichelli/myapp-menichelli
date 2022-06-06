import React from "react"
import {Link} from 'react-router-dom'; 
import { useCartContext } from "../../store/CartContextProvider.jsx.jsx"
import cart from "./multi/carri.svg"

const CartWidget = () => {
    const { totalCount } = useCartContext()

    return (
       
        <Link to={"/cart"} style={{  marginLeft: 16, marginRight: 24, marginTop: 0 }}>
        <img src={cart} alt="cart" width={64} height={64} />
        {
        totalCount()>0&&<button style={{ backgroundColor: '#fff', border: 'none'}}>{totalCount()}</button>
        }
      </Link>
    )
}
export default CartWidget
