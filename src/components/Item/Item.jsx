import React from "react";
import "./Item.css"


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
        <div className='footer'>{ item?.precio }</div>
    </div>
    </div>
    
  )
}

export default Item
