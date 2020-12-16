import React from "react";
import "./Css/style.css";
import Directional from "../../layout/Directional/Directional";
import MyLink from "../../Constants/CustomLink";
import inputfield from "../../components/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

function LoginForm(props) {
  const initialValue = {
    username: "",
    password: "",
  };

  const validateForm = Yup.object().shape({
    username: Yup.string()
      .required("Username is a required field")
      .trim("This field may not contain spaces")
      .strict()
      .min(3, "This field must be greater than 3 characters")
      .max(30, "This field must be less than 30 characters"),
    password: Yup.string()
      .required("Password is a required field")
      .trim("This field may not contain spaces")
      .strict()
      .min(3, "This field must be greater than 3 characters")
      .max(30, "This field must be less than 30 characters"),
  });

  return (
    <div className="warapper">
      <Directional namePage="Login" />
      <div className="container">
        <div className="row">
          <div className="wrapp-content">
            <div className="wrapp-content__link">
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

                      <div className="wrapp-content__wrap-form__text">
                        <div className="wrapp-content__wrap-form__text__remember">
                          <input type="checkbox" />
                          <span>Keep me Signed in</span>
                        </div>
                      </div>
                      <div className="wrapp-content__wrap-form__btn">
                        <button type="submit">Log In</button>
                      </div>
                      <div className="wrapp-content__wrap-form__hr">
                        <p>Or login with social platforms</p>
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

export default LoginForm;
