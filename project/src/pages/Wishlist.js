import React, { useEffect } from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Wishlist from "../components/Wishlist/WishList";
import { connect } from "react-redux";
import { actGetApiWishlist, actDeleteApiWishlist } from "../Action/index";
import WishListEmpty from "../components/WishListEmpty/WishListEmpty";

function WishlistPage({ items, getAllWishlistItem, deleteWishlistItem }) {
  useEffect(() => {
    getAllWishlistItem();
  }, [getAllWishlistItem]);

  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        {items.length > 0 ? (
          <Wishlist
            items={items}
            deleteWishlistItem={deleteWishlistItem}
            getAllWishlistItem={getAllWishlistItem}
          />
        ) : (
          <WishListEmpty />
        )}
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    items: state.Wishlist,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllWishlistItem: () => dispatch(actGetApiWishlist()),
    deleteWishlistItem: (idItem) => dispatch(actDeleteApiWishlist(idItem)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(WishlistPage);
