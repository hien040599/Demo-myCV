import { GET_WISHLIST_API, DELETE_WISHLIST_API } from "../Constants/ActionType";

let initialState = [];

let Wishlist = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_WISHLIST_API:
      state = [...payload].reverse();
      return [...state];
    case DELETE_WISHLIST_API:
      return [...state];
    default:
      return [...state];
  }
};

export default Wishlist;
