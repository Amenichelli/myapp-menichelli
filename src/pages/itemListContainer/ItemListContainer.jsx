import React, { useEffect, useState } from 'react'
import "./item-list-container.css";
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


function getData(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = category? query(itemCollection, where('category','==', category )): itemCollection;
  return getDocs(q)
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    getData(categoryId)
      .then(res => {
        setProducts(res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));
      })
      .catch(err => {
        console.log(err);
        alert('Error');
      });
  }, [categoryId]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
    </div>
  )
}


export default ItemListContainer