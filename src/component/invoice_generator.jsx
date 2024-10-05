import React from "react";
import Invoice from "./invoice.jsx";
import "../App.css";
import apple from "./static/apple-994d47a8.svg";
import google from "./static/google-3035153f.svg";
import bill from "./static/bill-fd47dad8.png";
const Generator = () =>{
  return (
    <div>
       <Invoice header={"Easily control your billing & invoicing"} content={"Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."} />
       <div className="ios--android">
         <img className="apple" src={apple} alt="Apple Icon" />
         <img className="google" src={google} alt="Google Icon" />
       </div><br/>
       <div className="paypal--source">
          <img className="w-100" src={bill} alt="PayPayl Icon" />
       </div>
    </div>
  );
}

export default Generator;