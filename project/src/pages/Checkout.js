import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import CheckOut from "../components/Checkout/CheckOut";

function Checkout(props) {
  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <CheckOut />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Checkout;
