import React from "react";
import Banner from "../components/banner/Banner";
import Introdution from "../components/Introduction/Introdution";
import Listitems from "../components/ListItems/Listitems";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import GetApi from "../context/GetApi";
import { useDispatch, useSelector } from "react-redux";
import { actGetApiWishlist } from "../Action";

function Home(props) {
  const items = useSelector((state) => state.Wishlist);
  const dispatch = useDispatch();

  let getAllWishlistItem = () => {
    dispatch(actGetApiWishlist());
  };

  localStorage.setItem("WISHLIST", JSON.stringify(items));
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

export default Home;
