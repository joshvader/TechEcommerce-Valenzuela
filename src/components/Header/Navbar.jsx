import React from 'react'

export const Navbar = () => {
  return (
    <header>
      <a href="#">
       <h1>TECHECOMMERCE</h1>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span> 
      </div>
    </header>
  )
}
