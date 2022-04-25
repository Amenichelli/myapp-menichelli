import React from 'react'
import "./item-list-container.css";
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = () => {
  function dummy(){
    console.log("este");
  }
  return (
    <div className='catalogo'>
      <ItemCount initial={0} stock={5} onAdd={dummy}/>
    </div>
  )
}


export default ItemListContainer