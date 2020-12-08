import React from "react";
import Menu from "./Menu";
import "./Css/main.css";
import useSearchBox from "../../hooks/useSearchBox";

function Header(props) {
  useSearchBox();
  return (
    <header className="header-shop">
      <div className="header-shop__container">
        <div className="header-shop__container__row">
            <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
