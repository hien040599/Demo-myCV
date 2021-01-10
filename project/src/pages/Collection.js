import React from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Colection from "../components/Collection/Collection";
import useSelectSort from "../hooks/useSelectSort";
import ColectionProvider from "../context/CollectionContext";
import { useDispatch, useSelector } from "react-redux";
import { actGetApiWishlist } from "../Action";
import GetApi from "../context/GetApi";

function Collection(props) {
  useSelectSort();

  const items = useSelector(state => state.Wishlist);
  localStorage.setItem("WISHLIST", JSON.stringify(items));
  const dispatch = useDispatch();

  let getAllWishlistItem = () =>{
    dispatch(actGetApiWishlist())
  }
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

export default Collection;
