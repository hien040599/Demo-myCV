import React from "react";
import "./Css/style.css";
import MyLink from "../../Constants/CustomLink";

function Directional(props) {
  const { namePage } = props;
  return (
    <div className="wrapper">
      <div className="wrap-directional">
        <p>
          <MyLink lable={"Home"} to="/" activeExact={true} /> /{" "}
          <span>{namePage}</span>
        </p>
      </div>
    </div>
  );
}

export default Directional;
