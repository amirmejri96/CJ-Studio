// import React from 'react'
// import { useState } from 'react'
// import './Works.css'

// const myProjects = [{ projectTitle : 'RH Brand', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'Kyara', category : 'Products', imgPath : '../../../assets/Projects/projet produit 1/projet produit 1.jpg' },
//   { projectTitle : 'BlechFlous Brand', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 2/projet fashion 2.jpg' },
//   { projectTitle : 'Wedding', category : 'Weddings', imgPath : '../../../assets/Projects/projet wedding 1/projet wedding 1.jpg' },
//   { projectTitle : 'Divinity', category : 'Products', imgPath : '../../../assets/Projects/projet produit 2/projet produit 2.jpg' },
//   { projectTitle : 'المختلفه', category : 'Fashions', imgPath : '../../../assets/Projects/projet fashion 3/projet fashion 3.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' },
//   { projectTitle : 'RH Brand', category : 'fashion', imgPath : '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg' }
// ]
// const Works = () => {
//   const [currentActive, setCurrentActive] = useState('all')
//   return (
//     <main id='Projects' className='project'>
//       <h3>Photography Projects</h3>
//       <div className='flex project-content'>
//         <section className='flex left-section'>
//           <button onClick={() => {setCurrentActive('all')}} className={currentActive === 'all' ? 'active' : 'null'}>All Projects</button>
//           <button onClick={() => {setCurrentActive('fashion')}} className={currentActive === 'fashion' ? 'active' : 'null'}>Fashions</button>
//           <button onClick={() => {setCurrentActive('product')}} className={currentActive === 'product' ? 'active' : 'null'}>Products</button>
//           <button onClick={() => {setCurrentActive('wedding')}} className={currentActive === 'wedding' ? 'active' : 'null'}>Weddings</button>
//           <button onClick={() => {setCurrentActive('other')}} className={currentActive === 'other' ? 'active' : 'null'}>Other Projects</button>
//         </section>
//         <section className='right-section flex'>
//           {myProjects.map((items) => {
//             return (
//               <article key={items.imgPath} className='card'>
//             <img width={266} src={items.imgPath} alt='RH_Brand' />
//             <div style={{width:'266'}} className='box'>
//               <h3 className='title'>{items.projectTitle}</h3>
//             </div>
//           </article>
//             )
//           })}
//         </section>
//       </div>
//     </main>
//   )
// }

// export default Works


import React, { useState } from 'react';
import './Works.css';

const myProjects = [
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'Kyara',
    category: 'Products',
    imgPath: '../../../assets/Projects/projet produit 1/projet produit 1.jpg',
    gallery: [
      '../../../assets/Projects/projet produit 1/projet produit 1.jpg',
      '../../../assets/Projects/projet produit 1/projet produit 1.2.jpg',
      '../../../assets/Projects/projet produit 1/projet produit 1.3.jpg',
      '../../../assets/Projects/projet produit 1/projet produit 1.4.jpg',
    ],
  },
  {
    projectTitle: 'Wedding',
    category: 'Weddings',
    imgPath: '../../../assets/Projects/projet wedding 1/projet wedding 1.jpg',
    gallery: [
      '../../../assets/Projects/projet wedding 1/projet wedding 1.jpg',
      '../../../assets/Projects/projet wedding 1/projet wedding 1.2.jpg',
      '../../../assets/Projects/projet wedding 1/projet wedding 1.3.jpg',
      '../../../assets/Projects/projet wedding 1/projet wedding 1.4.jpg',
      '../../../assets/Projects/projet wedding 1/projet wedding 1.5.jpg',
      '../../../assets/Projects/projet wedding 1/projet wedding 1.6.jpg',
    ],
  },
  {
    projectTitle: 'BlechFlous',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 2/projet fashion 2.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 2/projet fashion 2.1.jpg',
      '../../../assets/Projects/projet fashion 2/projet fashion 2.2.jpg',
      '../../../assets/Projects/projet fashion 2/projet fashion 2.3.jpg',
      '../../../assets/Projects/projet fashion 2/projet fashion 2.4.jpg',
    ],
  },
  {
    projectTitle: 'Divinity',
    category: 'Products',
    imgPath: '../../../assets/Projects/projet produit 2/projet produit 2.jpg',
    gallery: [
      '../../../assets/Projects/projet produit 2/projet produit 2.jpg',
      '../../../assets/Projects/projet produit 2/projet produit 2.1.jpg',
      '../../../assets/Projects/projet produit 2/projet produit 2.2.jpg',
    ],
  },
  {
    projectTitle: 'المختلفه',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 3/projet fashion 3.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 3/projet fashion 3.1.jpg',
      '../../../assets/Projects/projet fashion 3/projet fashion 3.2.jpg',
      '../../../assets/Projects/projet fashion 3/projet fashion 3.3.jpg',
      '../../../assets/Projects/projet fashion 3/projet fashion 3.4.jpg',
      '../../../assets/Projects/projet fashion 3/projet fashion 3.5.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
  {
    projectTitle: 'RH Brand',
    category: 'Fashions',
    imgPath: '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
    gallery: [
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.2.jpg',
      '../../../assets/Projects/projet fashion 1/Projet fashion 1.3.jpg',
    ],
  },
];

const Works = () => {
  const [currentActive, setCurrentActive] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <main id="Projects" className="project">
      <h3>Photography Projects</h3>
      <div className="flex project-content">
        <section className="flex left-section">
          <button onClick={() => setCurrentActive('all')} className={currentActive === 'all' ? 'active' : ''}>All Projects</button>
          <button onClick={() => setCurrentActive('fashion')} className={currentActive === 'fashion' ? 'active' : ''}>Fashions</button>
          <button onClick={() => setCurrentActive('product')} className={currentActive === 'product' ? 'active' : ''}>Products</button>
          <button onClick={() => setCurrentActive('wedding')} className={currentActive === 'wedding' ? 'active' : ''}>Weddings</button>
        </section>
        <section className="right-section flex">
          {myProjects
            .filter((item) => currentActive === 'all' || item.category.toLowerCase() === currentActive)
            .map((project) => (
              <article key={project.imgPath} className="card" onClick={() => openModal(project)}>
                <img width={266} src={project.imgPath} alt={project.projectTitle} />
                <div style={{ width: '266px' }} className="box">
                  <h3 className="title">{project.projectTitle}</h3>
                </div>
              </article>
            ))}
        </section>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <button className="prev-btn" onClick={prevImage}>&lt;</button>
            <img src={selectedProject.gallery[currentImageIndex]} alt="Project" />
            <button className="next-btn" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}

      <h3>Videography Projects</h3>
    </main>
  );
};

export default Works;
