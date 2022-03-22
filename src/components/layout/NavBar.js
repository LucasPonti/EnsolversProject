import React from 'react';
import logo from '../../shared/images/logo.png';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div id='navigation' className='container'>
            <img className='logo' src={logo} alt="Logotipo"/>
            <ul>Usuario</ul>
        </div>
    </nav>
  )
}

export default NavBar