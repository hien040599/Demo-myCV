import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import { FastField, Form, Formik } from "formik";
import inputfield from "../../components/CustomField/InputFieldContact";
import textareafield from "../../components/CustomField/TextareaField";
import { validateForm } from "../../Constants/ValidationContact";
import MyLink from "../../Constants/CustomLink";

function Contact(props) {
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    messages: "",
  };

  return (
    <div className="wrapper">
      <Directional namePage={"contact"} />
      <div className="container">
        <div className="row">
          <div className="col-contact-details">
            <div className="col-contact-details__content">
              <div className="col-contact-details__content__infor">
                <div className="col-contact-details__content__infor__wrap-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="col-contact-details__content__infor__text">
                  <p>+012 345 678 102</p>
                  <p>+012 345 678 102</p>
                </div>
              </div>

              <div className="col-contact-details__content__infor">
                <div className="col-contact-details__content__infor__wrap-icon">
                  <i className="fas fa-globe-asia"></i>
                </div>
                <div className="col-contact-details__content__infor__text">
                  <p>
                    <MyLink
                      lable={"urname@email.com"}
                      to={"/"}
                      activeExact={true}
                    />
                  </p>
                  <p>
                    <MyLink
                      lable={"urwebsitenaem.com"}
                      to={"/"}
                      activeExact={true}
                    />
                  </p>
                </div>
              </div>

              <div className="col-contact-details__content__infor">
                <div className="col-contact-details__content__infor__wrap-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="col-contact-details__content__infor__text">
                  <p>Address goes here,</p>
                  <p>street, Crossroad 123.</p>
                </div>
              </div>

              <div className="col-contact-details__content__infor__social">
                <h3>Follow Us</h3>
                <div className="col-contact-details__content__infor__social__icon">
                  <MyLink
                    lable={<i className="fab fa-facebook-f"></i>}
                    to={"/"}
                    activeExact={true}
                  />
                  <MyLink
                    lable={<i className="fab fa-instagram"></i>}
                    to={"/"}
                    activeExact={true}
                  />
                  <MyLink
                    lable={<i className="fab fa-twitter"></i>}
                    to={"/"}
                    activeExact={true}
                  />
                  <MyLink
                    lable={<i className="fab fa-pinterest-p"></i>}
                    to={"/"}
                    activeExact={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-contact-form">
            <div className="col-contact-form__content">
              <h2>Get In Touch</h2>

              <Formik
                initialValues={initialValue}
                validationSchema={validateForm}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formikprops) => {
                  // const { values, errors, touched } = formikprops;
                  // console.log({ values, errors, touched });
                  return (
                    <Form>
                      <div className="row">
                        <FastField
                          name="name"
                          component={inputfield}
                          type="text"
                          placeholder="Name"
                        />

                        <FastField
                          name="email"
                          component={inputfield}
                          type="text"
                          placeholder="Email"
                        />

                        <FastField
                          name="subject"
                          component={inputfield}
                          type="text"
                          placeholder="Subject"
                        />

                        <FastField
                          name="messages"
                          component={textareafield}
                          type="text"
                          placeholder="Messages"
                        />
                      </div>
                      <button type="submit">Send</button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
