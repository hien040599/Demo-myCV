import React from "react";
import "./Css/style.css";
import MyLink from "../../Constants/CustomLink";

function ListCartItems(props) {
  const { item, deleteCartItem } = props;

  let totalCart = 0;

  for (const value of item) {
    let total = value.quantity * value.price;
    totalCart += total;
  }

  return (
    <div className="wrapper-list-cart">
      {item.length === 0 ? (
        <p className="wrapper-list-cart__notification">
          No items added to cart
        </p>
      ) : (
        <div>
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
                      <i
                        className="far fa-times-circle"
                        onClick={() => deleteCartItem(value.id)}
                      ></i>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="wrapper-list-cart__total-price">
            <span>Total:</span>
            <span>${totalCart.toFixed(1)}</span>
          </div>

          <div className="wrapper-list-cart__btn">
            <MyLink lable={"VIEW CART"} to="/cart" activeExact={true} />
            <MyLink lable={"CHECKOUT"} to="/checkout" activeExact={true} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ListCartItems;
