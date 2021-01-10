import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import CheckOut from "../components/Checkout/CheckOut";
import { useSelector } from "react-redux";

function Checkout(props) {
  const item = useSelector((state) => state.Cart);
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

export default Checkout;
