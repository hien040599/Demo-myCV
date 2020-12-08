import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import LoginForm from "../components/Login/LoginForm";

function Login(props) {
  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        <LoginForm />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Login;
