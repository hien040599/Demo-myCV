import React from "react";

function CheckOutItem({ name, quantity, price }) {
  return (
    <li>
      <span>
        {name} X {quantity}
      </span>
      <span>${(quantity * price).toFixed(1)}</span>
    </li>
  );
}

export default CheckOutItem;
