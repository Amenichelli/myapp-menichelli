import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

    function getItem(id) {

            const db = getFirestore();
            const itemRef = doc(db, 'items', id);

            return getDoc(itemRef);
        }  
        
    function ItemDetailContainer() {
    const[Item, setItem] = useState({});
    const { id } = useParams();

        useEffect (() =>{
         getItem( id )
         .then( snapshot => {
            setItem({...snapshot.data(), id: snapshot.id})
        })
         .catch(err =>{
            console.log(err);
            alert("Algo Falló ")
        })
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={ Item } />
        </div>
    )
}
export default ItemDetailContainer