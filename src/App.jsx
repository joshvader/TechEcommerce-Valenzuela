import { useState } from 'react'
import { Navbar } from './components/Header/Navbar'
import "boxicons"; 
import ItemListContainer from './components/Productos/ItemListContainer';
import { ItemCount } from './components/Carrito/ItemCount';
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <ItemCount/>
      <ItemListContainer/>
    </div>
  )
}

export default App
