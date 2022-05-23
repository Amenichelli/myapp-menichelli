import React, { useEffect, useState } from 'react'
import "./item-list-container.css";
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


function getData(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = category &&  query(
    itemCollection(db, 'items'),
    where ('category', '==', category)
  );

  return getDocs(q || itemCollection);
}

function ItemListContainer() {
  const [productos, setproductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getData(categoryId)
      .then (snapshot => {
        setproductos(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id}
        }));
      })
      .catch(err => {
        console.log(err);
        alert('Error');
      });
  }, [categoryId]);

  return (
    <div className='list-item-container'>
      <ItemList items={productos} />
    </div>
  )
}
export default ItemListContainer