import React, { useEffect, useState } from 'react'
import "./item-list-container.css";
import ItemList from '../ItemList/ItemList';


function getData() {
  const myPromise = new Promise((resolve, reject) => {
    const productos = [
      
    ];
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    getData()
      .then(res => {
        setproductos(res);
      })
  }, []);

  return (
    <div className='list-item-container'>
      <ItemList items={productos} />
    </div>
  )
}

export default ItemListContainer