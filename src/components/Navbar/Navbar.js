import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="navbar flex">
      <div className="logo">
        <img src="../../../assets/logo .jpg" alt="logo" />
      </div>

      <button className="menu" onClick={() => setShowModal(true)}>
        <FaBars className="icon-menu" />
      </button>

      <nav>
        <ul className="flex">
          <li><a href="#accueil">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Works</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button onClick={() => setShowModal(false)} className="icon-close">
                <FaTimes />
              </button>
            </li>
            <li><a href="#accueil">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Works</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
