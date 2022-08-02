import React from 'react'
import { ProductList } from '../../Utils/ProductList';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
   
   
    const {itemId} = userParams() 
    
  
   const mPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ProductList);
    }, 2000)
  })
  useEffect(()=>{
    mPromesa
    .then((resolve)=> setProduct(resolve.find(
        product=> itemId == product.id
    )))
    
  },[])
  
  console.log(product)
  
 return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer