import React, { useEffect } from "react";
import Cart from "../components/shopping Cart/Cart";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import { connect } from "react-redux";
import {
  actDeleteApiCart,
  actGetApiCart,
  actUpdateApiCart,
} from "../Action/index";

function CartPage(props) {
  const { item, getAllCartItem, deleteCartItem, updateCartItem } = props;

  useEffect(() => {
    getAllCartItem();
  }, [getAllCartItem]);

  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <Cart
          item={item}
          deleteCartItem={deleteCartItem}
          updateCartItem={updateCartItem}
        />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    item: state.Cart,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllCartItem: () => dispatch(actGetApiCart()),
    deleteCartItem: (idItem) => dispatch(actDeleteApiCart(idItem)),
    updateCartItem: (idItem, data) => dispatch(actUpdateApiCart(idItem, data)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(CartPage);
