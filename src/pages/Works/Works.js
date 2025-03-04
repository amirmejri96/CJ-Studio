import React, { useState } from 'react';
import './Works.css';
import { myProjects } from './MyProjects';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';


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

  const [arr, setArr] = useState(myProjects)

  return (
    <main id="Projects" className="project">
      <h3>Photography Projects</h3>
      <div className="flex project-content">
        <section className="flex left-section">
          <button onClick={() => {setCurrentActive('all'); 
            setArr(myProjects) }
          } className={currentActive === 'all' ? 'active' : ''}>All Projects</button>
          <button onClick={() => {
            setCurrentActive('fashions');
            const newArr = myProjects.filter((item) => { return item.category === 'Fashions' })
            setArr(newArr);
          }}
            className={currentActive === 'fashions' ? 'active' : 'null'}>Fashions</button>
          <button onClick={() => {
            setCurrentActive('products');
            const newArr = myProjects.filter((item) => { return item.category === 'Products' })
            setArr(newArr);
          }} className={currentActive === 'products' ? 'active' : 'null'}>Products</button>
          <button onClick={() => {
            setCurrentActive('weddings');
            const newArr = myProjects.filter((item) => { return item.category === 'Weddings' })
            setArr(newArr);
          }} className={currentActive === 'weddings' ? 'active' : 'null'}>Weddings</button>
        </section>
        <section className="right-section flex">
          <AnimatePresence>
          {arr
            .filter((item) => currentActive === 'all' || item.category.toLowerCase() === currentActive)
            .map((project) => (
              <motion.article
              layout
              initial={{transform:'scale(0)'}}
              animate={{transform:'scale(1)'}}
              transition={{type:'spring', damping:8, stiffness:50}}
              key={project.imgPath} className="card" onClick={() => openModal(project)}>
                <img width={266} src={project.imgPath} alt={project.projectTitle} />
                <div style={{ width: '266px' }} className="box">
                  <h3 className="title">{project.projectTitle}</h3>
                </div>
              </motion.article>
            ))}
            </AnimatePresence>
        </section>
      </div>

      {
        selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>X</button>
              <button className="prev-btn" onClick={prevImage}>&lt;</button>
              <img src={selectedProject.gallery[currentImageIndex]} alt="Project" />
              <button className="next-btn" onClick={nextImage}>&gt;</button>
            </div>
          </div>
        )
      }

<h3>Some of our videography projects</h3>
<div className="video-grid">
  <iframe src="https://drive.google.com/file/d/1wwnKqAvWCsZO1cjv8OrdtfcOiPbbS_OW/preview" width="400" height="600" allow="autoplay" title='Video 1'></iframe>
  <iframe src="https://drive.google.com/file/d/1Gh0UJT0Z95Xo2X8DMsAt7ZK9BzlWId0T/preview" width="400" height="600" allow="autoplay" title='Video 2'></iframe>
  <iframe src="https://drive.google.com/file/d/1Z_nk5bLBr8aFkLRDBzI-illtFQJ6hNMW/preview" width="400" height="600" allow="autoplay" title='Video 3'></iframe>
  <iframe src="https://drive.google.com/file/d/1yu_-reSOevnJPQ70Nkljhj74q6abEbu8/preview" width="400" height="600" allow="autoplay" title='Video 4'></iframe>
</div>
    </main >
  );
};

export default Works;
