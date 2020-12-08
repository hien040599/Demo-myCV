import React from "react";
import "./Css/style.css";
import Directional from "../../layout/Directional/Directional";

function NotFound(props) {
  return (
    <div className="wrapper">
        <Directional namePage={"404 Page"} />
      <div className="container">
        <div className="row">
          <div className="wrap-content">
            <h1 className="wrap-content__title">404</h1>
            <h2 className="wrap-content__notify">OPPS! PAGE NOT FOUND</h2>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed, name changed or is temporarity unavailable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
