import React from "react";
import card from "./static/card-af071def.png";
import Invoice from "./invoice.jsx";

const BetterWay = () =>{
  return (
    <div className="business--profile">
       <h2 className="business--handler">Find a better card deal in few easy steps.</h2>
       <p className="bs--content ds--colors ct--color">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p><br />
       <button className="bs--btn">Get Started</button><br /><br />
       <div>
          <img src={card} alt="card icon" className="w-100" />
       </div>
       <div>
         <Invoice header={"What People are saying about us"} content={"Everything you need to accept card payments and grow your business anywhere on the planet."} />
       </div>
    </div>
  )
}

export default BetterWay;