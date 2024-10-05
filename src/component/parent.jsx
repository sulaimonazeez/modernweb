import React from "react";
import NavBar from "./navbar.jsx";
import Home from "./home.jsx";
import ActiveUser from "./active.jsx";
import Business from "./business.jsx";
import Generator from "./invoice_generator.jsx";
import BetterWay from "./better.jsx";
import RateGenerator from "./rate_generator.jsx";
import Give from "./try_us.jsx";
import MyFooter from "./myfooter.jsx";
import LastDance from "./last.jsx";
const Parent = () =>{
  return (
    <div className="space-bar">
      <NavBar /><br /><br />
      <Home />
      <ActiveUser />
      <Business />
      <Generator />
      <BetterWay />
      <RateGenerator />
      <Give />
      <LastDance />
      <MyFooter />
      <hr />
      <p className="--end">Copyright Ⓒ 2024 Azeez. All Rights Reserved.</p>
    </div>
  );
}

export default Parent;