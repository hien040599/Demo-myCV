import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import MyLink from "../../Constants/CustomLink";
import CartItem from "./CartItem";

function Cart(props) {
  const { item, deleteCartItem, updateCartItem } = props;

  let totalItems = 0;

  item.forEach((value) => {
    let total = Number(value.price * value.quantity);
    totalItems += total;
  });

  let handleClearAll = () => {
    item.forEach((value) => {
      deleteCartItem(value.id);
    });
  };

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
                {item.map((value, index) => {
                  return (
                    <CartItem
                      idItem={value.id}
                      name={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      image={value.image}
                      key={index}
                      color={value.color}
                      size={value.size}
                      deleteCartItem={deleteCartItem}
                      updateCartItem={updateCartItem}
                      item={value}
                    />
                  );
                })}
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
              <button onClick={() => handleClearAll()}>
                Clear Shopping Cart
              </button>
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
                  <span>{item.length}</span>
                </div>
                <div className="col-cart-show-total__wrap-content__body__total">
                  <span>Grand Total</span>
                  <span>${totalItems.toFixed(1)}</span>
                </div>
              </div>
              <div className="col-cart-show-total__wrap-content__footer">
                <MyLink
                  lable={"Proceed to Checkout"}
                  to={"/checkout"}
                  activeExact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
