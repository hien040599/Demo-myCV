import React from "react";
import "./Css/main.css";
import MyLink from "../../Constants/CustomLink";
import Logo from "../Logo/Logo";
import ListCartItems from "../ListCartItems/ListCartItems";

function menu(props) {
  const { arrLength, item, deleteCartItem } = props;
  return (
    <div className="header-shop__wrap-menu">
      <MyLink
        lable={
          <div className="header-shop__wrap-menu__svg">
            <Logo />
          </div>
        }
        to="/"
        activeExact={true}
        className="header-shop__wrap-menu__wrap-img"
      />
      <nav>
        <ul className="header-shop__wrap-menu__list">
          <li>
            <MyLink lable={"Collection"} to="/collection" activeExact={true} />
          </li>
          <li>
            <a href="google.com.vn">
              Pages
              <i className="icon-arrow-down fas fa-angle-down"></i>
            </a>
            <ul className="header-shop__wrap-menu__list__small-list">
              <li>
                <MyLink lable={"Home"} to="/" activeExact={true} />
              </li>
              <li>
                <MyLink
                  lable={"Collection"}
                  to="/collection"
                  activeExact={true}
                />
              </li>
              <li>
                <MyLink lable={"Cart"} to="/cart" activeExact={true} />
              </li>
            </ul>
          </li>
          <li>
            <a href="google.com.vn">About Us</a>
          </li>
          <li>
            <a href="google.com.vn">Contact Us</a>
          </li>
        </ul>
      </nav>
      <ul className="header-shop__wrap-menu__wrap-icon">
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <span className="search-box__span"></span>
          </div>
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <i className="fas fa-user"></i>
          <ul>
            <li>
              <MyLink lable={"Login"} to="/login" activeExact={true} />
            </li>
            <li>
              <MyLink lable={"Register"} to="/register" activeExact={true} />
            </li>
          </ul>
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <i className="far fa-heart"></i>
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <i className="fas fa-random"></i>
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <button className="header-shop__wrap-menu__wrap-icon-item__btn-view-cart">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <div className="qnt-items">
            <span>{arrLength}</span>
          </div>
          <ListCartItems item={item} deleteCartItem={deleteCartItem} />
        </li>
      </ul>
    </div>
  );
}

export default menu;
