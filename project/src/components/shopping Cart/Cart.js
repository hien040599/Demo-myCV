import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import anh from "../../images/3.jpg";
import MyLink from "../../Constants/CustomLink";

function Cart(props) {
  return (
    <div className="wrapper">
      <Directional namePage={"Cart"} />
      <div className="container">
        <div className="row">
          <div className="col-cart-title">
            <h3>Your cart items</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-cart-content">
            <table className="content-cart">
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT PRICE</th>
                  <th>QTY</th>
                  <th>SUBTOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={anh} alt="imgs" />
                  </td>
                  <td>
                    <div className="content-cart__name">
                      <MyLink
                        lable={"Lorem ipsum coat"}
                        to={"/"}
                        activeExact={true}
                      />
                      <p>Color: blue</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td>
                    <span>$15.8</span>
                  </td>
                  <td>
                    <div className="content-cart__qnt">
                      <button>+</button>
                      <input type="text" readOnly value="1" />
                      <button>-</button>
                    </div>
                  </td>
                  <td>
                    <span>$15.8</span>
                  </td>
                  <td>
                    <span>
                      <div>
                        <i className="fas fa-trash-alt"></i>
                      </div>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src={anh} alt="imgs" />
                  </td>
                  <td>
                    <div className="content-cart__name">
                      <MyLink
                        lable={"Lorem ipsum coat"}
                        to={"/"}
                        activeExact={true}
                      />
                      <p>Color: blue</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td>
                    <span>$15.8</span>
                  </td>
                  <td>
                    <div className="content-cart__qnt">
                      <button>+</button>
                      <input type="text" readOnly value="1" />
                      <button>-</button>
                    </div>
                  </td>
                  <td>
                    <span>$15.8</span>
                  </td>
                  <td>
                    <span>
                      <div>
                        <i className="fas fa-trash-alt"></i>
                      </div>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-cart-btn">
            <div className="col-cart-btn__wrap-content">
              <MyLink
                lable={"Continue Shopping"}
                to={"/collection"}
                activeExact={true}
              />
              <button>Clear Shopping Cart</button>
            </div>
          </div>
          <div className="col-cart-show-total">
            <div className="col-cart-show-total__wrap-content">
              <div className="col-cart-show-total__wrap-content__header">
                <h4>Cart Total</h4>
              </div>
              <div className="col-cart-show-total__wrap-content__body">
                <div className="col-cart-show-total__wrap-content__body__qnt">
                  <span>Total products</span>
                  <span>2</span>
                </div>
                <div className="col-cart-show-total__wrap-content__body__total">
                  <span>Grand Total</span>
                  <span>$60.83</span>
                </div>
              </div>
              <div className="col-cart-show-total__wrap-content__footer">
                <a href="/">Proceed to Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
