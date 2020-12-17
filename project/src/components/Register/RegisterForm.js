import React from "react";
import "./Css/style.css";
import Directional from "../../layout/Directional/Directional";
import MyLink from "../../Constants/CustomLink";
import inputfield from "../../components/CustomField/InputField";
import { FastField, Form, Formik } from "formik";
import { validateForm } from "../../Constants/ValidationRegister";

function RegisterForm(props) {
  const initialValue = {
    username: "",
    password: "",
    email: "",
    repassword: "",
  };

  return (
    <div className="warapper">
      <Directional namePage="Register" />
      <div className="container">
        <div className="row">
          <div className="wrapp-content">
            <div className="wrapp-content__link-register">
              <h4>
                <MyLink lable="Login" to="/login" activeExact={true} />
              </h4>
              <h4>
                <MyLink lable="Register" to="/register" activeExact={true} />
              </h4>
            </div>

            <div className="wrapp-content__wrap-form">
              <Formik
                initialValues={initialValue}
                validationSchema={validateForm}
                onSubmit={(values) => {
                  console.log("values");
                }}
              >
                {(formikprops) => {
                  // const { values, errors, touched } = formikprops;
                  // console.log({ values, errors, touched });
                  return (
                    <Form>
                      <FastField
                        name="username"
                        component={inputfield}
                        label="Username"
                        type="text"
                        placeholder="Username"
                      />

                      <FastField
                        name="password"
                        component={inputfield}
                        label="Password"
                        type="password"
                        placeholder="Password"
                      />

                      <FastField
                        name="email"
                        component={inputfield}
                        label="Email"
                        type="text"
                        placeholder="Email"
                      />

                      <FastField
                        name="repassword"
                        component={inputfield}
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm password"
                      />
                      <div className="wrapp-content__wrap-form__btn">
                        <button type="submit">Sign Up</button>
                      </div>

                      <div className="wrapp-content__wrap-form__hr">
                        <p>Or sign up with social platforms</p>
                      </div>
                      <div className="wrapp-content__wrap-form__forgot">
                        <button>
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button>
                          <i className="fab fa-google"></i>
                        </button>
                        <button>
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button>
                          <i className="fab fa-twitter"></i>
                        </button>
                      </div>
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

export default RegisterForm;
