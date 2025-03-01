import React from 'react'
import { useState } from 'react'
import './Works.css'

const myProjects = [{ projectTitle : 'RH Brand', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'Kyara', category : 'Products', imgPath : '../../../assets/Projects/projet produit 1/projet produit 1.jpg' },
  { projectTitle : 'BlechFlous Brand', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 2/projet fashion 2.jpg' },
  { projectTitle : 'Wedding', category : 'Weddings', imgPath : '../../../assets/Projects/projet wedding 1/projet wedding 1.jpg' },
  { projectTitle : 'Divinity', category : 'Products', imgPath : '../../../assets/Projects/projet produit 2/projet produit 2.jpg' },
  { projectTitle : 'المختلفه', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 3/projet fashion 3.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
  { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' }
]
const Works = () => {
  const [currentActive, setCurrentActive] = useState('all')
  return (
    <main id='Projects' className='project'>
      <h3>Photography Projects</h3>
      <div className='flex project-content'>
        <section className='flex left-section'>
          <button onClick={() => {setCurrentActive('all')}} className={currentActive === 'all' ? 'active' : 'null'}>All Projects</button>
          <button onClick={() => {setCurrentActive('fashion')}} className={currentActive === 'fashion' ? 'active' : 'null'}>Fashions</button>
          <button onClick={() => {setCurrentActive('product')}} className={currentActive === 'product' ? 'active' : 'null'}>Products</button>
          <button onClick={() => {setCurrentActive('wedding')}} className={currentActive === 'wedding' ? 'active' : 'null'}>Weddings</button>
          <button onClick={() => {setCurrentActive('other')}} className={currentActive === 'other' ? 'active' : 'null'}>Other Projects</button>
        </section>
        <section className='right-section flex'>
          {myProjects.map((items) => {
            return (
              <article key={items.imgPath} className='card'>
            <img width={266} src={items.imgPath} alt='RH_Brand' />
            <div style={{width:'266'}} className='box'>
              <h3 className='title'>{items.projectTitle}</h3>
            </div>
          </article>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default Works