import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import CheckOut from "../components/Checkout/CheckOut";
import { connect } from "react-redux";
import { actGetApiCart } from "../Action/index";

function Checkout(props) {
  const { item } = props;
  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <CheckOut item={item} />
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
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Checkout);
