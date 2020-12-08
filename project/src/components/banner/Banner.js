import React from "react";
import "./Css/style.css";
import pic1 from "../../test/img/banner65.png";
import pic2 from "../../test/img/banner66.png";
import pic3 from "../../test/img/banner9.png";
import banner1 from "../../test/img/banner3.png";
import banner2 from "../../test/img/banner8.png";
import banner3 from "../../test/img/banner69.png";
import useBanner from "../../hooks/useBanner";

function Banner(props) {
  useBanner();
  return (
    <div className="wp-banner">
      <ul className="wp-banner__background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="wp-banner__wp-imgs">
        <img className="wp-banner__wp-imgs_img activity" src={pic1} alt="img" />
        <img className="wp-banner__wp-imgs_img" src={pic2} alt="img" />
        <img className="wp-banner__wp-imgs_img" src={pic3} alt="img" />
      </div>

      <div className="wp-banner__wp-sales">
        <img
          className="wp-banner__wp-sales__sale show-banner"
          src={banner1}
          alt="img"
        />
        <img className="wp-banner__wp-sales__sale" src={banner2} alt="img" />
        <img className="wp-banner__wp-sales__sale" src={banner3} alt="img" />
      </div>

      <div className="wp-banner__wp-arr">
        <i className="arr-left fas fa-chevron-left"></i>
        <i className="arr-right fas fa-chevron-right"></i>
      </div>

      <ul className="wp-banner__list">
        <li className="wp-banner__list__item check">1</li>
        <li className="wp-banner__list__item">2</li>
        <li className="wp-banner__list__item">3</li>
      </ul>
      <div className="wp-banner__wp-btn">
        <button className="btn-banner">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Banner;
