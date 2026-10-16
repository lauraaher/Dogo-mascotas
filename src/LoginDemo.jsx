import React, {useState} from 'react';
import {Home, Mail, LockKeyhole, UserRound, PawPrint, Dog} from 'lucide-react';
import './login.css';

export default function LoginDemo({user,onLogin,onLogout,onRecover,onHome}) {
 const [mode,setMode]=useState('login');
 const title=user?'BIENVENIDO A DOGO':mode==='register'?'CREA TU CUENTA':mode==='reset'?'RECUPERA TU ACCESO':'INICIO DE SESIÓN';
 function submit(e){e.preventDefault();if(mode==='reset'){onRecover();setMode('login');return}const data=new FormData(e.currentTarget);onLogin(data.get('name')||'Amigo')}
 return <div className="dogo-login">
  <div className="dogo-login-brand"><span>🐕</span><strong>DOGO</strong></div>
  <div className="dogo-login-scene" aria-hidden="true"><Dog/><Dog/></div>
  <div className="dogo-login-pattern" aria-hidden="true">{Array.from({length:18},(_,i)=><PawPrint key={i}/>)}</div>
  <div className="dogo-login-card">
   <button className="dogo-login-home" onClick={onHome} aria-label="Volver al inicio"><Home size={35} strokeWidth={2.5}/></button>
   <h2>{title}</h2>
   {user?<div className="dogo-login-welcome"><p>¡Hola, {user}!</p><button className="dogo-login-submit" onClick={onLogout}>CERRAR SESIÓN</button></div>:<form onSubmit={submit}>
    {mode==='register'&&<label className="dogo-login-input"><UserRound size={18}/><span className="sr-only">Nombre</span><input name="name" placeholder="Tu nombre" autoComplete="given-name" required/></label>}
    <label className="dogo-login-input"><Mail size={18}/><span className="sr-only">Correo electrónico</span><input name="email" placeholder="Correo electrónico" type="email" autoComplete="email" required/></label>
    {mode!=='reset'&&<label className="dogo-login-input"><LockKeyhole size={18}/><span className="sr-only">Contraseña</span><input name="password" placeholder="Contraseña" type="password" minLength={6} autoComplete={mode==='register'?'new-password':'current-password'} required/></label>}
    {mode==='login'&&<button className="dogo-login-forgot" type="button" onClick={()=>setMode('reset')}>¿Olvidaste tu contraseña?</button>}
    <button className="dogo-login-submit" type="submit">{mode==='register'?'REGISTRARME':mode==='reset'?'RECUPERAR':'INGRESAR'}</button>
    <p className="dogo-login-register">{mode==='login'?'¿No tienes cuenta? ':''}<button type="button" onClick={()=>setMode(mode==='login'?'register':'login')}>{mode==='login'?'Regístrate':'Volver al inicio de sesión'}</button></p>
   </form>}
  </div>
  <div className="dogo-login-pug"><img src={`${import.meta.env.BASE_URL}login-reference.png`} alt="Pug del mockup de Dogo"/></div>
  <small className="dogo-login-demo">Entorno demo · Usa datos ficticios</small>
 </div>
}
