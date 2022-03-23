import React from 'react'
import {signup, useAuth, logout, login} from '../../server/firebase';
import { useRef, useState } from 'react';
import './Login.css';
import user from "../../shared/images/user.png"

const Login = () => {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [flag, setFlag] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef(); 
  
    async function handleSignup(){
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            setFlag(true);
        } catch {
            alert("Error!");
        }
        setLoading(false)
  }

  async function handleLogin() {
    setLoading(true);
    try {
        await login(emailRef.current.value, passwordRef.current.value);
        setFlag(true)
    }catch{
        alert("Error!");
    }  
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
        await logout();
        setFlag(false);
    }catch{
        alert("Error!");
    }  
    setLoading(false);
  }

  

  
  
  
    return (
        flag === false ? (
    <div className='Login'>
        <div><img src={user}/> </div><br/>
        <div className='Fields'><br/>
            <input className='user' ref={emailRef} placeholder='Usuario'/><br/>
            <input className='password' ref={passwordRef} type= "password" placeholder='Contraseña'/><br/>
            <button disabled={loading || currentUser} onClick={handleSignup}>Registrarse</button>
            <button disabled={loading || currentUser} onClick={handleLogin}>Iniciar Sesion</button>
            <button disabled={loading || !currentUser} onClick={handleLogOut}>Salir</button>
        </div>
        
    </div>) : ( 
    <div className='Login'>
        <h2>Bienvenido: {currentUser?.email}</h2>
        <button disabled={loading || !currentUser} onClick={handleLogOut} setFlag={false}>Salir</button>
    </div> )
  )
}

export default Login