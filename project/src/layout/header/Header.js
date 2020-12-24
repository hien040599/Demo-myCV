import React, { useEffect } from "react";
import Menu from "./Menu";
import "./Css/main.css";
import useSearchBox from "../../hooks/useSearchBox";
import { connect } from "react-redux";
import {
  actDeleteApiCart,
  actGetApiCart,
  actGetApiWishlist,
} from "../../Action";

function Header(props) {
  const {
    item,
    getAllCartItem,
    deleteCartItem,
    items,
    getAllWishlistItem,
  } = props;
  let arrCart = JSON.parse(localStorage.getItem("CART"));

  useEffect(() => {
    getAllCartItem();
    getAllWishlistItem();
  }, [getAllCartItem, getAllWishlistItem]);

  useSearchBox();

  return (
    <header className="header-shop">
      <div className="header-shop__container">
        <div className="header-shop__container__row">
          <Menu
            items={items.length}
            arrLength={arrCart ? arrCart.length : item.length}
            item={arrCart ? arrCart : item}
            deleteCartItem={deleteCartItem}
          />
        </div>
      </div>
    </header>
  );
}
let mapStateToProps = (state) => {
  localStorage.setItem("CART", JSON.stringify(state.Cart));

  return {
    item: state.Cart,
    items: state.Wishlist,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllCartItem: () => dispatch(actGetApiCart()),
    deleteCartItem: (idItem) => dispatch(actDeleteApiCart(idItem)),
    getAllWishlistItem: () => dispatch(actGetApiWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
