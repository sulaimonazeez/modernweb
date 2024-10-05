import React from "react";
import "../App.css";


const Footer = ({ children }) =>{
  return (
    <ul className="footer--adj">
        {children}
    </ul>
  );
}

export default Footer;