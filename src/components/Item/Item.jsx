import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";


function Item({ item }) {
  return (
    <div className="body-product">
      <div className='card'>
        <div className='header'>{ item?.nombre }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imagen } alt="Imagen del producto" />
            </div>
            
        </div>
        <div className='footer'><Link to={"/item/" + item?.id }> 
            <button className="btn-info"> +Info! </button> </Link></div>
    </div>
    </div>
    
  )
}

export default Item
