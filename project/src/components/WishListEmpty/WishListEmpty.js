import React from "react";
import anh from "../../images/empty-wishlist.png";
import Directional from "../../layout/Directional/Directional";
import MyLink from "../../Constants/CustomLink";

function WishListEmpty(props) {
  return (
    <div className="wrapper">
      <Directional namePage={"wishlist"} />
      <div className="container">
        <div className="row">
          <div className="col-cart-empty">
            <div className="col-cart-empty__wrap-content">
              <img src={anh} alt="cart-empty" />
              <h2>No items found in wishlist</h2>
              <MyLink
                lable={"Add Items"}
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

export default WishListEmpty;
