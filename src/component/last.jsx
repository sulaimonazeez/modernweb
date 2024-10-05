import React from "react";
import logo from "./static/logo-efc6c435.svg"
import "../App.css";
//don't wonder why i name this lastdance lol
const LastDance = () => {
  return (
    <div><br/><br />
      <img src={logo} alt="Logo Icon" className="logo--end" />
      <div><br/>
        <p className="ds--colors ct--color">A new way to make the payments easy, reliable and secure.</p>
      </div>
    </div>
  )
}

export default LastDance;