import React from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Colection from "../components/Collection/Collection";
import useSelectSort from "../hooks/useSelectSort";
import ColectionProvider from "../context/CollectionContext";


function Collection(props) {
  useSelectSort()
  return (
    <div className="wrapper">
     <ColectionProvider>
      <section>
        <Header />
      </section>

      <section>
        <Colection />
      </section>

      <section>
        <Footer />
      </section>
      </ColectionProvider>
    </div>
  );
}

export default Collection;
