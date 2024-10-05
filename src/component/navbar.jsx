import React, { useState } from "react";
import "../App.css";
import logo from "./static/logo-efc6c435.svg";
import menu from "./static/menu-e0613cf3.svg";
import close from "./static/close-945782e8.svg";
const NavBar = () =>{
  const [nav, setNav ] = useState(false)
  
  return (
   <div className="nav-parent">
    <nav className="nav-bar">
       <img src={logo} alt="Logo" className="logo"/>
       <ul className="nav-links">
        <li><a href="/home">Home </a></li>
        <li><a href="/home">About </a></li>
        <li><a href="/home">Service </a></li>
        <li><a href="/home">SignUp </a></li>
        <li><a href="/home">Login </a></li>
       </ul>
       {nav ? <img src={close} onClick={()=> setNav(false)} alt="Menu" className="menus"/>: <img src={menu} onClick={()=> setNav(true)} alt="Menu" className="menus"/>}
    </nav>
    {nav ? <ul className="mobile-nav">
        <li><a href="/home">Home </a></li>
        <li><a href="/home">About </a></li>
        <li><a href="/home">Service </a></li>
        <li><a href="/home">SignUp </a></li>
        <li><a href="/home">Login </a></li>
       </ul>: null}
   </div>
  )
}

export default NavBar;