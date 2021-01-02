import React from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Colection from "../components/Collection/Collection";
import useSelectSort from "../hooks/useSelectSort";
import ColectionProvider from "../context/CollectionContext";
import { connect } from "react-redux";
import { actGetApiWishlist } from "../Action";
import GetApi from "../context/GetApi";

function Collection({ getAllWishlistItem }) {
  useSelectSort();
  return (
    <div className="wrapper">
      <GetApi>
        <ColectionProvider>
          <section>
            <Header />
          </section>

          <section>
            <Colection getAllWishlistItem={getAllWishlistItem} />
          </section>

          <section>
            <Footer />
          </section>
        </ColectionProvider>
      </GetApi>
    </div>
  );
}

let mapStateToProps = (state) => {
  localStorage.setItem("WISHLIST", JSON.stringify(state.Wishlist));

  return {
    items: state.Wishlist,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllWishlistItem: () => dispatch(actGetApiWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Collection);
