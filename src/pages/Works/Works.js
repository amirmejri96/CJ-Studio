import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <main id='Projects' className='project'>
      <h3>Projects</h3>
      <div className='project-content'>
      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>Fashions</button>
        <button>Events</button>
        <button>Weddings</button>
        <button>Other Projects</button>
      </section>
      <section className='right-section'>

      </section>
      </div>
    </main>
  )
}

export default Works