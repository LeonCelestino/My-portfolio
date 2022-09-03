import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
function Header() {

  const navRef = useRef();
  const [click, setClick] = useState(false);
  const showNavBar = ()=> {
    navRef.current.classList.toggle("active");
  }

  const handleClick = ()=> setClick(!click);
  const closeMenu = () => setClick(false);

  return ( 
    <header>
      <div className="logo">
        <h3>LEON</h3>
      </div>
      <nav className={click ? 'active' : ''}>
        <ul>
          <li> <Link href="#home" to="home" spy={true} smooth={true} offset={-5} duration={2000} onClick={closeMenu}>Olá!</Link> </li>
          <li> <Link href="#about" to="about" spy={true} smooth={true} offset={-5} duration={1000} onClick={closeMenu}>Quem sou?</Link> </li>
          <li> <Link href="#projects" to="projects" spy={true} smooth={true} offset={-5} duration={1000} onClick={closeMenu}>O que faço?</Link> </li>
          <li> <Link href="#contact" to="contact" spy={true} smooth={true} offset={-10} duration={2000} onClick={closeMenu}>Fale comigo!</Link> </li>
        </ul>
        <button className="navBtn navClose" onClick={handleClick}><FaTimes /></button>
      </nav>
        <button className="navBtn navOpen" onClick={handleClick}><FaBars /></button>
    </header>
  );
}

export default Header;
