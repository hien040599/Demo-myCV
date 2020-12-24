import { combineReducers } from "redux";
import Cart from "./CartReducers";
import Wishlist from "./WishlistReduces";

let appReduces = combineReducers({
  Cart,
  Wishlist,
});

export default appReduces;
