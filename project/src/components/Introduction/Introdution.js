import React from "react";
import "./Css/style.css";
import icon1 from "../../images/49796746-stock-vector-fast-free-shipping-delivery-truck-flat-icon-for-apps-and-websites.jpg";
import icon2 from "../../images/45765.png";
import icon3 from "../../images/406696-200.png";

function Introdution(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="wrapp_content">
          <div className="content">
            <img src={icon1} alt="img" />
            <h5>Free Shipping</h5>
            <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
        </div>

        <div className="wrapp_content">
          <div className="content">
            <img src={icon2} alt="img" />
            <h5>Support 24/7</h5>
            <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
        </div>

        <div className="wrapp_content">
          <div className="content">
            <img src={icon3} alt="img" />
            <h5>Money Return</h5>
            <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introdution;
