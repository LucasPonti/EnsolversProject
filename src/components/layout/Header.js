import React from 'react'
import logo from '../../shared/images/logo.png';


const Header = props => {
  const {
      title = 'Mi lista de Tareas Pendientes', url = 'http://localhost:3000'
  } = props;
    return (
    <heade className= 'App-header'>
        <a href={url}>
            <img src={logo} className='App-logo' alt='logo'/>
        </a>
        <h1 className='App-title'>To-Do List</h1>
        <h2 className='App-title'>{title}</h2>
    </heade>
  )
}

export default Header;