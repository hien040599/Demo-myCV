import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import ItemDetails from "../components/Details/ItemDetails";
import GetApi from "../context/GetApi";

function Details(props) {
  const { match } = props;

  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header />
        </section>

        <section>
          <ItemDetails itemid={match.params.id} />
        </section>

        <section>
          <Footer />
        </section>
      </GetApi>
    </div>
  );
}

export default Details;
