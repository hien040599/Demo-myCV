import React, { useRef, useState } from "react";
import MyLink from "../../Constants/CustomLink";
import {
  ADD_TO_CART,
  DELETE_ITEM_FROM_CART,
  NOTIFY_ERROR_QNT,
  REMOVE_ITEM_FROM_CART,
} from "../../Constants/Messages";
import * as Notify from "../../Constants/Notify";

function CartItem(props) {
  const {
    idItem,
    name,
    price,
    quantity,
    image,
    color,
    size,
    deleteCartItem,
    updateCartItem,
    item,
  } = props;

  const [qntItem, setqntItem] = useState(quantity);
  const qntItemRef = useRef(null);

  let handleChangeQnt = (e) => {
    let val = e.target.value;

    setqntItem(val);

    if (qntItemRef.current) {
      clearTimeout(qntItemRef.current);
    }

    qntItemRef.current = setTimeout(() => {
      if (val === "") {
        val = 1;
        setqntItem(val);
        Notify.toastError(
          NOTIFY_ERROR_QNT,
          "top-center",
          2000,
          "notify-cart-err"
        );
      }
      updateCartItem(idItem, { ...item, quantity: +val });
    }, 800);
  };

  let handleKeyPress = (e) => {
    if (e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  };

  let updateIncreaseItemCart = (idItem, data) => {
    updateCartItem(idItem, { ...data, quantity: data.quantity + 1 });
    setqntItem(data.quantity + 1);
    Notify.toastSuccess(
      ADD_TO_CART,
      "bottom-left",
      1200,
      "notify-cart-success"
    );
  };

  let updateDecreaseItemCart = (idItem, data) => {
    if (data.quantity - 1 > 0) {
      updateCartItem(idItem, { ...data, quantity: data.quantity - 1 });
      setqntItem(data.quantity - 1);
      Notify.toastWarn(
        DELETE_ITEM_FROM_CART,
        "bottom-left",
        1200,
        "notify-cart-warn"
      );
    } else {
      Notify.toastError(
        NOTIFY_ERROR_QNT,
        "top-center",
        2000,
        "notify-cart-err"
      );
    }
  };

  let handleRemoveitem = (idItem) => {
    deleteCartItem(idItem);
    Notify.toastError(
      REMOVE_ITEM_FROM_CART,
      "bottom-left",
      2000,
      "notify-cart-err"
    );
  };

  return (
    <tr>
      <td>
        <img src={image} alt="imgs" />
      </td>
      <td>
        <div className="content-cart__name">
          <MyLink lable={name} to={"/collection"} activeExact={true} />
          <p>Color: {color}</p>
          <p>Size: {size}</p>
        </div>
      </td>
      <td>
        <span>${price}</span>
      </td>
      <td>
        {Notify.toastContainer("bottom-left", 1200)}
        <div className="content-cart__qnt">
          <button onClick={() => updateDecreaseItemCart(idItem, item)}>
            -
          </button>
          <input
            type="number"
            onChange={(e) => handleChangeQnt(e)}
            value={qntItem}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <button onClick={() => updateIncreaseItemCart(idItem, item)}>
            +
          </button>
        </div>
      </td>
      <td>
        <span>${Number((quantity * price).toFixed(1))}</span>
      </td>
      <td>
        <span>
          <div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleRemoveitem(idItem)}
            ></i>
          </div>
        </span>
      </td>
    </tr>
  );
}

export default CartItem;
