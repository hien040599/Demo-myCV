import React from 'react';
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import DontFound from "../components/NotFound/DontFound";

function NotFound(props) {
    return (
        <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
      <DontFound/>
      </section>

      <section>
        <Footer />
      </section>
    </div>
    );
}

export default NotFound;