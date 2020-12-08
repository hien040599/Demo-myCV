import React from "react";
import Banner from "../components/banner/Banner";
import Introdution from "../components/Introduction/Introdution";
import Listitems from "../components/ListItems/Listitems";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import GetApi from "../context/GetApi";

function Home(props) {
  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header />
          <Banner />
        </section>

        <section>
          <Introdution />

          <Listitems />
        </section>

        <section>
          <Footer />
        </section>
      </GetApi>
    </div>
  );
}

export default Home;
