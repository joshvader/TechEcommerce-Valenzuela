import React from 'react'
import CartWidget from './CartWidget'

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
      <CartWidget className="cart"/>
      
    </header>
  )
}
