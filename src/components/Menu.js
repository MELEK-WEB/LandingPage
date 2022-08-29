import React from 'react'
import logo from '../assets/img/logo.png'
import './menu.css'
export default function Menu() {
  return (

    <header className='Headermenu'>
        <img  src={logo} alt="logo" className="logo"/>
      

          <ul className="nav_links"> 
              <li className='navItems'>Home</li>
              <li className='navItems'>Why us</li>
              <li className='navItems'>Get Started</li>
              <li className='navItems'>Help</li>
          </ul>
        <button class="btn Support">Support</button>
    </header>
  
  )
}
