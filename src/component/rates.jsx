import React from "react";
import quote from "./static/quotes-a87d5e6d.svg";
import "../App.css";

const Rates = ({content, profile, name, position}) =>{
  return (
    <section className="quote--section">
       <div>
          <div><img src={quote} className="quote--img" alt="Quote" /></div><br/>
          <p className="ds--colors ct--color">{content}</p>
          <div className="d-flex">
            <div><img src={profile} alt="Profile" className="profile--adj" /></div>
            <div className="profile--info">
               <h5>{name}</h5>
               <p>{position}</p>
            </div>
          </div>
          
       </div>
    </section>
  )
}

export default Rates;