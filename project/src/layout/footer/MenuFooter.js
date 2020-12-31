import React from "react";
import MyLink from "../../Constants/CustomLink";
import "./Css/style.css";
import Logo from "../Logo/Logo";

function MenuFooter(props) {
  return (
    <div className="footer-cart__container__wrap-content">
      <div className="footer-cart__wrap-img">
        <MyLink
          lable={
            <div className="header-shop__wrap-menu__svg">
              <Logo />
            </div>
          }
          to="/"
          activeExact={true}
          className="footer-cart__wrap-img__link"
        />
        <p>© 2020 Flone.</p>
        <p>All Rights Reserved</p>
      </div>

      <ul className="footer-cart__list">
        <li className="footer-cart__list__item">About us</li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">About us</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Store location</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Contact</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Order tracking</a>
        </li>
      </ul>

      <ul className="footer-cart__list">
        <li className="footer-cart__list__item">USEFUL LINKS</li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Returns</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Support Policy</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Size guide</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">FAQs</a>
        </li>
      </ul>

      <ul className="footer-cart__list">
        <li className="footer-cart__list__item">FOLLOW US</li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Facebook</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Twitter</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Instagram</a>
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">Youtube</a>
        </li>
      </ul>

      <ul className="footer-cart__list">
        <li className="footer-cart__list__item">SUBSCRIBE</li>
        <li className="footer-cart__list__item">
          <p>Get E-mail updates about our latest shop and special offers.</p>
        </li>
        <li className="footer-cart__list__item">
          <input type="text" placeholder="Enter your email address..." />
        </li>
        <li className="footer-cart__list__item">
          <a href="google.com.vn">SUBSCRIBE</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuFooter;
