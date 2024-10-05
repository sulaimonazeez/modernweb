import React from "react";
import Rates from "./rates.jsx";
import profiles from "./static/people01-a772086b.png";
import "../App.css";
import profile2 from "./static/people02-ee8ce82b.png";
import profile3 from "./static/people03-d9f4f98a.png";

const RateGenerator = () => {
  return (
    <div className="ml--j row">
     <div className="col-xs-12 col-sm-6 col-lg-6"><br />
      <Rates content="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." profile={profiles} name={"Herman Jensen"} position={"Founder & Leader"} />
     </div>
      <div className="col-xs-12 col-sm-6 col-lg-6"><br />
      <Rates content="Money makes your life easier. If you're lucky to have it, you're lucky." profile={profile2} name={"Mark Tyson"} position={"Founder & Leader"} />
     </div>
      <div className="col-xs-12 col-sm-6 col-lg-6"><br />
      <Rates content="It is usually people in the money business, finance, and international trade that are really rich." profile={profile3} name={"Kenn Gallagher"} position={"Founder & Leader"} />
     </div>
    </div>
  )
}

export default RateGenerator;