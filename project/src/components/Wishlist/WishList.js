import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import MyLink from "../../Constants/CustomLink";
import WishListItem from "./WishListItem";

function Wishlist({ items, deleteWishlistItem }) {
  return (
    <div className="wrapper">
      <Directional namePage={"wishlist"} />
      <div className="container">
        <div className="row">
          <div className="col-wishlist-title">
            <h3>Your wishlist items</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-wishlist-content">
            <table className="content-wishlist">
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT PRICE</th>
                  <th>ADD TO CART</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {items.map((value, index) => {
                  return (
                    <WishListItem
                      key={index}
                      iditem={value.id}
                      name={value.name}
                      img={value.image}
                      price={value.price}
                      deleteWishlistItem={deleteWishlistItem}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-wishlist-btn">
            <div className="col-wishlist-btn__wrap-content">
              <MyLink
                lable={"Continue Shopping"}
                to={"/collection"}
                activeExact={true}
              />
              <button>Clear Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
