import React from 'react';
import "../App.css";
import Reward from "./rewards.jsx";
import star from "./static/Star-b8bf87ea.svg";
import shield from "./static/Shield-6d9e87e5.svg";
import transfer from "./static/Send-454b3199.svg";
const Business = () =>{
  return (
    <div className="business--profile">
       <h2 className="business--handler">You do the business, we’ll handle the money.</h2>
       <p className="bs--content ds--colors ct--color">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p><br />
       <button className="bs--btn">Get Started</button><br /><br />
       <Reward image={star} header={"Rewards"} content={"The best credit cards offer some tantalizing combinations of promotions and prizes"}/>
       <Reward image={shield} header={"100% Secured"} content={"We take proactive steps make sure your information and transactions are secure."}/>
       <Reward image={transfer} header={"Balance Transfer"} content={"A balance transfer credit card can save you a lot of money in interest charges."}/>
    </div>
  )
}

export default Business;