import {
  GET_CART_API,
  DELETE_CART_API,
  UPDATE_CART_API,
} from "../Constants/ActionType";

let initialState = [];

let Cart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_CART_API:
      state = [...payload].reverse();
      return [...state];
    case DELETE_CART_API:
      return [...state];
    case UPDATE_CART_API:
      state = [...payload].reverse();
      return [...state];
    default:
      return [...state];
  }
};

export default Cart;
