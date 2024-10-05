//import Et from '../../../ps/static/admin/js/vendor/select2/i18n/et';
import React from "react";
import discount from "./static/Discount-61d9dc08.svg";
import "../App.css";
import arrow from "./static/arrow-up-012ff21b.svg"
import robot from "./static/robot-352cd501.png";
const Home = () =>{
  return (
   <section className="mt-5">
    <div className="row mt-5">
      <div className="col-xs-12 col-sm-8 col-lg-6">
         <p className="ds--color"><img src={discount} className="discount" alt="Discount"/> <span><span className="discount--color">20%</span> Discount for <span className="discount--color">1 Month </span> Account</span></p>
         <h1 className="web-title">The Next <br /><span className="gn--color">Gene<span className="lightblue--color">ration</span></span><br /> Payment Method.</h1>
         <p className="ds--colors">
           Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
         </p><br />
         <img src={robot} alt="Robot" className="w-100 img--adj"/>
      </div>
      <div className="col-xs-12 col-sm-4 col-lg-4 d-flex justify-center ctx">
        <a href="#start" className="get-started">G<span className="lightblue--color">et </span><img src={arrow} alt="Arrow" /><br />Star<span className="lightblue--color">ted</span></a>
      </div>
    </div>
   </section>
  )
}

export default Home;