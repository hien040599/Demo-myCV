import React, { useEffect } from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import ItemDetails from "../components/Details/ItemDetails";
import GetApi from "../context/GetApi";
import { connect } from "react-redux";
import { actGetApiCart } from "../Action";

function Details(props) {
  const { match, getAllCartItem, listCart } = props;

  useEffect(() => {
    getAllCartItem();
  }, [getAllCartItem]);

  localStorage.setItem("CART", JSON.stringify(listCart));

  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header />
        </section>

        <section>
          <ItemDetails
            cart={listCart}
            itemid={match.params.id}
            getAllCartItem={getAllCartItem}
          />
        </section>

        <section>
          <Footer />
        </section>
      </GetApi>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    listCart: state.Cart,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllCartItem: () => dispatch(actGetApiCart()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Details);
