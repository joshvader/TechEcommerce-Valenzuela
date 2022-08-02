import React, { useEffect, useState } from 'react'
import { ProductList } from '../../Utils/ProductList';
import Item from './Item';
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);


  const mPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ProductList);
    }, 2000)
  })
  useEffect(()=>{
    mPromesa
    .then((resolve)=> setProducts(resolve))
  },[])
  
  
  



  return (
    <>
      <h1 className="title">PRODUCTOS</h1>

      {products.map(product => {
        return < Item
          id={product.id}
          key={product.id}
          name={product.name}
          img={product.img}
          role={product.role}></Item>
      })}
    </>
  )
}

export default ItemListContainer