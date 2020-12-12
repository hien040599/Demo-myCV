import React from "react";
import anh from "../../images/empty-cart.png";
import "./Css/style.css";
import Directional from "../../layout/Directional/Directional";
import MyLink from "../../Constants/CustomLink";

function CartEmpty(props) {
  return (
    <div className="wrapper">
      <Directional namePage={"Cart"} />
      <div className="container">
        <div className="row">
          <div className="col-cart-empty">
            <div className="col-cart-empty__wrap-content">
              <img src={anh} alt="cart-empty" />
              <h2>No items found in cart</h2>
              <MyLink
                lable={"SHOP NOW"}
                to={"/collection"}
                activeExact={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
