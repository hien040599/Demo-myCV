import React from "react";
import "./Css/style.css";

function ListCartItems(props) {
  const { item } = props;

  let totalCart = 0;

  for (const value of item) {
    console.log(value.quantity * value.price);
    let total = value.quantity * value.price;
    totalCart += total;
  }
  console.log(totalCart);
  return (
    <div className="wrapper-list-cart">
      <ul>
        {item.map((value, index) => {
          return (
            <li key={index}>
              <div className="wrapper-list-cart__img">
                <img src={value.image} alt={value.name} />
              </div>
              <div className="wrapper-list-cart__infor">
                <h4>
                  <a href="google.com.vn">{value.name}</a>
                </h4>
                <p>Qty: {value.quantity}</p>
                <p>${value.price}</p>
                <div className="wrapper-list-cart__infor__Characteristics">
                  <p>Color: {value.color}</p>
                  <p>Size:{value.size}</p>
                </div>
              </div>
              <div className="wrapper-list-cart__btn-delete">
                <span>
                  <i className="far fa-times-circle"></i>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="wrapper-list-cart__total-price">
        <span>Total:</span>
        <span>${totalCart}</span>
      </div>

      <div className="wrapper-list-cart__btn">
        <a href="google.com.vn">VIEW CART</a>
        <a href="google.com.vn">CHECKOUT</a>
      </div>
    </div>
  );
}

export default ListCartItems;
