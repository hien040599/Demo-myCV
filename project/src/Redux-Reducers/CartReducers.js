import { GET_CART_API } from "../Constants/ActionType";

let initialState = [];

let Cart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_CART_API:
      state = [...payload];
      return [...state];
    default:
      return [...state];
  }
};

export default Cart;
