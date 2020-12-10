import React from "react";
import MyLink from "../../Constants/CustomLink";

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
  } = props;

  return (
    <tr>
      <td>
        <img src={image} alt="imgs" />
      </td>
      <td>
        <div className="content-cart__name">
          <MyLink lable={name} to={"/"} activeExact={true} />
          <p>Color: {color}</p>
          <p>Size: {size}</p>
        </div>
      </td>
      <td>
        <span>${price}</span>
      </td>
      <td>
        <div className="content-cart__qnt">
          <button>-</button>
          <input type="text" readOnly value={quantity} />
          <button>+</button>
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
              onClick={() => deleteCartItem(idItem)}
            ></i>
          </div>
        </span>
      </td>
    </tr>
  );
}

export default CartItem;
