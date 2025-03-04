import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='About' className='about'>
      <div className='content-about flex'>
        <div className='left-content'>
          <h3>What is CJ Studio ?</h3>
          <p>At CJ Studio, we are passionate about capturing life's most precious moments through stunning photography and videography.
            Whether it's a wedding, a corporate event, or a creative project,
            we bring your vision to life with artistic excellence and attention to detail.
            Our team of skilled professionals is dedicated to delivering high-quality visuals that tell your unique story.
            Let us turn your moments into timeless memories.</p>
          <div className='photo-ceo'>
            <div className='ceo'>
            <img src='../../../assets/crispy.png' alt='CEO_1' />
            <p>Fares Laaridhi <br/> ( Videographer )</p>
            </div>
            <div className='ceo'>
            <img src='../../../assets/joker.png' alt='CEO_2' />
            <p>Anoir Sammat <br/> ( Photographer )</p>
            </div>
          </div>
        </div>

        <div className='right-content'>
          <img src='../../../assets/Fichier 2.png' alt='logo_CJ' />
        </div>
      </div>
    </section>
  )
}

export default About