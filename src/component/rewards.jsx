import React from "react";
import "../App.css";

const Reward = ({image, header, content}) =>{
  return (
    <div className="reward--container">
       <div className="img--div"><img src={image} alt="reward" className="reward--logo"/></div>
       <div className="content--div">
         <h5 className="reward--header">{header}</h5>
         <p className="reward-content">{content}</p>
      </div>
    </div>
  )
}

export default Reward;