import React, { useState } from 'react'
import Item from './ItemList';
const ItemListContainer = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Linux",
      role: "Operating system",
      img: "https://codealo-commerce-cms.onrender.com/uploads/linux_48923655d6.png",
    },
    {
      id: 2,
      name: "Nuxt.js",
      role: "Intuitive Vue Framework",
      img: "https://codealo-commerce-cms.onrender.com/uploads/nuxt_js_948b22e2df.png",
    },
    {
      id: 3,
      name: "React",
      role: "Library",
      img: "https://codealo-commerce-cms.onrender.com/uploads/react_496bc591f8.png",
    },
  ]
  
 );
 const mPromesa = new Promise((resolve, reject) => {
  setTimeout(() =>{
    res (product);
  }, 2000)
})



  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      
       {products.map(product => {
        return < Item  
        key={product.id}
        name={product.name} 
        img={product.img} 
        role={product.role}></Item>
       })}
    </>
  )
}

export default ItemListContainer