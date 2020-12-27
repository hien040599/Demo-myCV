import React from "react";
import About from "../components/About/About";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";


function AboutPage(props) {
  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <About/>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default AboutPage;
