import React, { useEffect, useState } from 'react'
import "./item-list-container.css";
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from "react-router-dom";


function getData(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productos = [
      {
        id: 1,
        nombre: 'Pizza Margherita',
        precio: '$850',
        stock: "25",
        category:"pizza",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 2,
        nombre: 'Fugazzeta Rellena',
        precio: '$990',
        stock: "25",
        category:"pizza",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://www.rionegro.com.ar/wp-content/uploads/2021/04/174495648_1605928346274502_2986851770455894648_n.jpg'
    },
    {
        id: 3,
        nombre: 'Napo',
        precio: '$950',
        stock: "25",
        category:"pizza",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://safariresto.com.ar/wp-content/uploads/2020/10/pizza-napolitana.jpg'
    },
    {
        id: 4,
        nombre: 'Cheeseburguer brioche',
        precio: '$850',
        stock: "25",
        category:"burger",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://images.pexels.com/photos/8879360/pexels-photo-8879360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 5,
        nombre: 'Cheeseburguer pan de papa',
        precio: '$800',
        stock: "25",
        category:"burger",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 6,
        nombre: 'Brioche Bacon',
        precio: '$900',
        stock: "25",
        category:"burger",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 7,
        nombre: 'Brioche Blue',
        precio: '$850',
        stock: "25",
        category:"burger",
        descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
        imagen: 'https://media.istockphoto.com/photos/gourmet-burger-with-blue-cheese-picture-id483878830?k=20&m=483878830&s=612x612&w=0&h=5y4Vnfd_VSH1dUlqxbSzJssXFVtrBTgoe1hmFg6F93E='
     }
    ];
    const productsFiltered = category ? productos.filter(p => p.category === category) : productos;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [productos, setproductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getData(categoryId)
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