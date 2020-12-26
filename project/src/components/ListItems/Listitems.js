import React, { useContext } from "react";
import { apiContext } from "../../context/GetApi";
import "./Css/style.css";
import Item from "./Item";
import brand1 from "../../images/tải xuống.png";
import brand2 from "../../images/tải xuống (1).png";
import brand3 from "../../images/tải xuống (2).png";

function Listitems({ getAllWishlistItem }) {
  const { products } = useContext(apiContext);
  let arrNew = [...products].splice(0, 8);

  return (
    <div className="container">
      <div className="row">
        <div className="wrapp-title">
          <h2>New Arrival</h2>
          <p>Lorem ipsum dolor sit amet conse ctetu.</p>
        </div>
      </div>

      <div className="row">
        {arrNew.map((item, index) => {
          return (
            <Item
            a={item}
              key={index}
              itemid={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              getAllWishlistItem={getAllWishlistItem}
            />
          );
        })}
      </div>

      <div className="row">
        <div className="row__link-view-more">
          <a href="google.com.vn">VIEW MORE ITEMS</a>
        </div>
      </div>

      <div className="row">
        <div className="wrapp-email-sub">
          <div className="wrapp-email-sub__form-sub">
            <h3 className="wrapp-email-sub__form-sub__text">
              Subscribe Our Newsletter
            </h3>
            <p>Stay up to date with our latest new and products</p>
          </div>
          <div className="wrapp-email-sub__form-sub__input">
            <input type="text" placeholder="Enter Email Address" />
            <span>
              <i className="fas fa-paper-plane"></i>
            </span>
          </div>
        </div>
        <div className="wrap-intro-brands">
          <h2>Shop By Brands</h2>
          <div className="wrap-intro-brands__show-brands">
            <div>
              <img src={brand1} alt="img" />
            </div>
            <div>
              <img src={brand2} alt="img" />
            </div>
            <div>
              <img src={brand3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listitems;
