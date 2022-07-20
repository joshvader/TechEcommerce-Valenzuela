import { useState } from 'react'
import { Navbar } from './components/Header/Navbar'
import "boxicons"; 
import ItemListContainer from './components/Productos/ItemListContainer';
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  )
}

export default App
