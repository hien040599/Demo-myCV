import React from "react";
import Cart from "../components/shopping Cart/Cart";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";




function Collection(props) {

  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
       <Cart/>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Collection;
