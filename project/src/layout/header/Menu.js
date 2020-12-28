import React from "react";
import "./Css/main.css";
import MyLink from "../../Constants/CustomLink";
import Logo from "../Logo/Logo";
import ListCartItems from "../ListCartItems/ListCartItems";

function menu(props) {
  const { arrLength, item, deleteCartItem, items } = props;

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
            Pages
            <i className="icon-arrow-down fas fa-angle-down"></i>
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
            <MyLink lable={"About"} to="/about" activeExact={true} />
          </li>
          <li>
            <MyLink lable={"Contact"} to="/contact" activeExact={true} />
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
          <MyLink
            lable={<i className="far fa-heart"></i>}
            to="/wishlist"
            activeExact={true}
          />
          {items === 0 ? (
            ""
          ) : (
            <div className="qnt-items">
              <span>{items}</span>
            </div>
          )}
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <i className="fas fa-random"></i>
        </li>
        <li className="header-shop__wrap-menu__wrap-icon-item">
          <button className="header-shop__wrap-menu__wrap-icon-item__btn-view-cart">
            <i className="fas fa-shopping-cart"></i>
          </button>
          {arrLength === 0 ? (
            ""
          ) : (
            <div className="qnt-items">
              <span>{arrLength}</span>
            </div>
          )}
          <ListCartItems item={item} deleteCartItem={deleteCartItem} />
        </li>
      </ul>
    </div>
  );
}

export default menu;
