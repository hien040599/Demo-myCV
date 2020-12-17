import React from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import Contact from "../components/Contact/Contact";

function ContactPage(props) {
  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default ContactPage;
