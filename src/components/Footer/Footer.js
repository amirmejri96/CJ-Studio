import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href='#accueil'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Projects'>Works</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      <p>© 2025 Amir Mejri, all right reserved.</p>
    </footer>
  )
}

export default Footer