import React from "react";
import Banner from "../components/banner/Banner";
import Introdution from "../components/Introduction/Introdution";
import Listitems from "../components/ListItems/Listitems";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import GetApi from "../context/GetApi";
import { connect } from "react-redux";
import { actGetApiWishlist } from "../Action";

function Home({ getAllWishlistItem }) {
  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header />
          <Banner />
        </section>

        <section>
          <Introdution />

          <Listitems getAllWishlistItem={getAllWishlistItem} />
        </section>

        <section>
          <Footer />
        </section>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
