import React from "react";
import "../App.css";
import Footer from "./footer.jsx";

const MyFooter = () =>{
  return (
    <div className="row down--apt">
      <div className="col-xs-6 col-sm-4 col-lg-4 col-xlg-4">
        <h3 className="pt--adj">Useful Links</h3>
        <Footer>
          <li>Content</li>
          <li>How it Works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms & Services</li>
        </Footer>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-4 col-xlg-4">
        <h3 className="pt--adj">Community</h3>
        <Footer>
           <li>Help Center</li>
           <li>Newsletters</li>
           <li>Partners</li>
           <li>Suggestions</li>
           <li>Blog</li>
        </Footer>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-4 col-xlg-4">
        <h3 className="pt--adj">Partner</h3>
        <Footer>
           <li>Our Partner</li>
           <li>Become a Partner</li>
        </Footer>
      </div>
    </div>
  )
}

export default MyFooter;