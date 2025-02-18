import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='navbar flex'>
        <div className='logo'>
            <img src='../../../assets/logo .jpg' alt='logo' />
        </div>

        <nav>
            <ul className='flex'>
                <li><a href='#accueil'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Works</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar