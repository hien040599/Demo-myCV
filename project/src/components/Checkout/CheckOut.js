import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import anh1 from "../../images/Visa-Brand-Markvbm_blugrad01.jpg";
import anh2 from "../../images/6756548_preview.png";
import anh3 from "../../images/5-2.jpg";
import CheckOutItem from "./CheckOutItem";

function CheckOut({ item }) {
  let totalCart = 0;

  for (const value of item) {
    let total = value.quantity * value.price;
    totalCart += total;
  }

  return (
    <div className="wrapper">
      <Directional namePage={"checkout"} />
      <div className="container">
        <div className="row">
          <div className="col-checkout__infor">
            <div className="col-checkout__infor__wrapper">
              <h3>Billing Details</h3>
              <div className="row col-checkout__infor__wrapper__form">
                <div className="col-checkout__infor__wrapper__form-group">
                  <label>First Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Company Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Country</label>
                  <select className="abc">
                    <option>Select a country</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                  </select>
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Street Address</label>
                  <input
                    placeholder="House number and street name"
                    type="text"
                  />
                  <input
                    placeholder="Apartment, suite, unit etc."
                    type="text"
                  />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Town / City</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>State / County</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Phone</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Postcode / ZIP</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>
              <h4>Additional information</h4>
              <div className="col-checkout__infor__wrapper__oder-notes">
                <label>Order notes</label>
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery. "
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="col-checkout__payment">
            <div className="col-checkout__payment__wrapper">
              <h3>Payment method</h3>
              <div className="col-checkout__payment__wrapper__content">
                <div className="col-checkout__payment__wrapper__content__method">
                  <p>Please choose a payment method</p>
                  <ul className="menu-payment">
                    <li>
                      <input name="payment" type="radio" />
                      <span>Payment on delivery</span>
                    </li>
                    <li>
                      <input name="payment" type="radio" />
                      <span>Payment via credit card</span>

                      <ul className="sup-menu-payment">
                        <li>
                          <input name="method" type="radio" />

                          <img src={anh1} alt="payment-method" />
                        </li>
                        <li>
                          <input name="method" type="radio" />

                          <img src={anh2} alt="payment-method" />
                        </li>
                        <li>
                          <input name="method" type="radio" />

                          <img src={anh3} alt="payment-method" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-checkout__order">
            <div className="col-checkout__order__wrapper">
              <h3>Your order</h3>
              <div className="col-checkout__order__wrapper__item-order">
                <div className="col-checkout__order__wrapper__item-order__content">
                  <div className="col-checkout__order__wrapper__item-order__content__header">
                    <span>Product</span>
                    <span>Total</span>
                  </div>
                  <div className="col-checkout__order__wrapper__item-order__content__body">
                    <ul>
                      {item.map((value, index) => {
                        return (
                          <CheckOutItem
                            key={index}
                            name={value.name}
                            quantity={value.quantity}
                            price={value.price}
                          />
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-checkout__order__wrapper__item-order__content__footer">
                    <div className="col-checkout__order__wrapper__item-order__content__footer__shipping">
                      <span>Shipping</span>
                      <span>Free shipping</span>
                    </div>
                    <div className="col-checkout__order__wrapper__item-order__content__footer__total-order">
                      <span>Total</span>
                      <span>${totalCart.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-checkout__order__wrapper__btn">
                <button>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
