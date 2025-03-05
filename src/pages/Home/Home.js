import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.section id='accueil' className='home'
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}>
      <div>
        <h1>Welcome to <br /> CJ Studio</h1>
        <p>Where Every Frame Tells a Story</p>
      </div>
      <div>
        <h5>For more informations, contact-us :</h5>
        <button><a href='#Contact'>CONTACT-US</a></button>
      </div>
    </motion.section>
  )
}

export default Home