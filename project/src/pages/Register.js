import React from 'react';
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import RegisterForm from '../components/Register/RegisterForm';

function Register(props) {
    return (
        <div className="wrapper">
        <section>
          <Header />
        </section>
  
        <section>
        <RegisterForm/>
        </section>
  
        <section>
          <Footer />
        </section>
      </div>
    );
}

export default Register;