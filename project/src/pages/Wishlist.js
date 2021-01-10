import React, { useEffect } from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Wishlist from "../components/Wishlist/WishList";
import { useDispatch, useSelector } from "react-redux";
import { actGetApiWishlist, actDeleteApiWishlist } from "../Action/index";
import WishListEmpty from "../components/WishListEmpty/WishListEmpty";

function WishlistPage(props) {
  const items = useSelector((state) => state.Wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetApiWishlist);
  }, [dispatch]);

  let getAllWishlistItem = () => dispatch(actGetApiWishlist());
  let deleteWishlistItem = (idItem) => dispatch(actDeleteApiWishlist(idItem));

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

export default WishlistPage;
