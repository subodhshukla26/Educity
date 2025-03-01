import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for hamburger and close

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      <div className={`menu-icon z-10 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li onClick={closeMenu}><button className="btn"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></button></li>
        <li onClick={closeMenu}><button className="btn"><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></button></li>
        <li onClick={closeMenu}><button className="btn"><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></button></li>
        <li onClick={closeMenu}><button className="btn"><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></button></li>
        <li onClick={closeMenu}><button className="btn"><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></button></li>
        <li onClick={closeMenu}><button className="btn"><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
