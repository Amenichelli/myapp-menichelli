import React, { useEffect, useState } from 'react'
import "./item-list-container.css";
import ItemList from '../ItemList/ItemList';


function getData() {
  const myPromise = new Promise((resolve, reject) => {
    const productos = [
      {
        id: 1,
        nombre: 'Pizza margherita',
        precio: '$800',
        imagen: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      },
      {
        id: 2,
        nombre: 'Fugazzeta',
        precio: '$900',
        imagen: 'https://hacermasapizza.com/img/pizza-argentina-417.jpg'
      },
      {
        id: 3,
        nombre: 'Cheeseburguer Pan de papa',
        precio: '$750',
        imagen: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 4,
        nombre: 'Burguer bacon (p/papa)',
        precio: '$800',
        imagen: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 5,
        nombre: 'Cheeseburguer brioche',
        precio: '$850',
        imagen: 'https://images.pexels.com/photos/8879360/pexels-photo-8879360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
      }
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