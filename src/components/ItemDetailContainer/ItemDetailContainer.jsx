import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

    function getItem() {
            const myPromise = new Promise((resolve, reject) => {
                    const item = {
                            id: 1,
                            nombre: 'Cheeseburguer brioche',
                            precio: '$850',
                            descripcion: "Burguer con pan bricoche, medallón de carne de 120grs, cheddar, lechuga, pepinillos y salsa especial.",
                            imagen: 'https://images.pexels.com/photos/8879360/pexels-photo-8879360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                            };
                            setTimeout(() => {
                                resolve(item)
                            }, 2000);
            });
         return myPromise
        }  
        
    function ItemDetailContainer() {
    const[Item, setItem] = useState({});

        useEffect (() =>{
         getItem()
         .then( res=> {
            setItem(res)
        })
         .catch(err =>{
            console.log(err);
            alert("Algo Falló :(")
        })
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={ Item } />
        </div>
    )
}
export default ItemDetailContainer