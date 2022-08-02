import { useState } from 'react'
import { Navbar } from './components/Header/Navbar'
import "boxicons";
import ItemListContainer from './components/Productos/ItemListContainer';
import { ItemCount } from './components/Carrito/ItemCount';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
function App() {


  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path ="/" element ={<ItemListContainer/>}/>
          <Route path ="/item/:itemId" element ={<h1>Chao</h1>}/>
          

        </Routes>
        <h2>Hola</h2>
      
        {/*<ItemCount>*/}
        {/*<ItemListContainer />*/}
        </BrowserRouter>
  )
}

export default App
