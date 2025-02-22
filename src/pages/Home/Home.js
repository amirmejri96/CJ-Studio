import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section id='accueil' className='home'>
      <div>
        <h1>Welcome to <br/> CJ Studio</h1>
        <p>Where Every Frame Tells a Story</p>
      </div>
      <div>
        <h5>For more informations, contact-us :</h5>
        <button><a href='#Contact'>CONTACT-US</a></button>
      </div>
    </section>
  )
}

export default Home