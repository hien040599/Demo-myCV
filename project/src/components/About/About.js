import React from "react";
import Directional from "../../layout/Directional/Directional";
import anh from "../../images/83dc0ccd948f64d13d9e.jpg";
import "./Css/style.css";

function About(props) {
  return (
    <div className="wrapper">
      <Directional namePage={"about"} />
      <div className="container">
        <div className="row">
          <div className="col-introduce">
            <div className="col-introduce__img">
              <img src={anh} alt="anh" />
            </div>
          </div>
          <div className="col-introduce-detail">
            <div className="col-introduce-detail__content">
              <h2>Hi ! I'm Hien Nguyen</h2>
              <div className="col-introduce-detail__contnets__text">
                <p>
                  I am an introvert but I do not dare to talk or communicate
                  with others because of the nature of my work, if I do not
                  communicate, it will not be successful. My hobbies are
                  watching movies, reading stories, listening to music, etc.
                  Especially in the information technology industry I like to
                  become a front end programmer and to do that requires people
                  to have meticulous personality to every small detail, always
                  have to learn new technologies. , etc. During my studies I
                  also did an e-commerce project. Above are a few of the
                  personalities and traits that I have evaluated myself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-experience-show">
            <div className="col-experience-show__wrapp-content">
              <h3>Contact information</h3>
              <div className="col-experience-show__wrapp-content__text">
                <div className="col-experience-show__wrapp-content__text__list">
                  <div>
                    <p>Phone</p>
                    <p>Facebook</p>
                    <p>Email</p>
                  </div>
                  <div>
                    <p>0123456789</p>
                    <p>link facebook</p>
                    <p>email address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-experience-show">
            <div className="col-experience-show__wrapp-content">
              <h3>Education</h3>
              <div className="col-experience-show__wrapp-content__text">
                <p>2018 - 2021</p>
                <p>
                  Tốt nghiệp cao đẳng Anh Quốc BTEC FPT chuyên ngành công nghệ
                  thông tin
                </p>
              </div>
            </div>
          </div>

          <div className="col-experience-show">
            <div className="col-experience-show__wrapp-content">
              <h3>Skills</h3>
              <div className="col-experience-show__wrapp-content__text">
                <ul>
                  <li>
                    - Biết và đã thực hành một số dự án nhỏ có sử dụng html,
                    css, js
                  </li>
                  <li>
                    - Biết và đã thực hành một số dự án nhỏ có sử dụng framework
                    react, redux, scss
                  </li>
                  <li>- Biết sử dụng git, github</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-experience-show">
            <div className="col-experience-show__wrapp-content">
              <h3>Experience</h3>
              <div className="col-experience-show__wrapp-content__text">
                <p>
                  - Trong quá trình học tôi đã tự làm nên một trang web sử dụng
                  api, trong dự án này tôi đã sử dụng 1 số công nghệ sau:
                </p>
                <p>+ React, redux, sass, redux-thunk, react-redux,...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
