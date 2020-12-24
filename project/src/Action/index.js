import * as Type from "../Constants/ActionType";
import CallApi from "../API/CallApi";

export let actGetApiCart = () => {
  return async (dispatch) => {
    let result = await CallApi("cart", null);
    dispatch(actRenderApi(result.data));
  };
};

export let actDeleteApiCart = (idItem) => {
  return async (dispatch) => {
    await CallApi(`cart/${idItem}`, null, "DELETE");
    dispatch(actGetApiCart());
  };
};

export let actUpdateApiCart = (idItem, data) => {
  return async (dispatch) => {
    await CallApi(`cart/${idItem}`, data, "PUT");
    dispatch(actGetApiCart());
  };
};

export let actRenderApi = (item) => {
  return {
    type: Type.GET_CART_API,
    payload: item,
  };
};

export let actGetApiWishlist = () => {
  return async (dispatch) => {
    let result = await CallApi("wishlist", null);
    dispatch(actRenderApiWishlist(result.data));
  };
};

export let actDeleteApiWishlist = (id) => {
  return async (dispatch) => {
    await CallApi(`wishlist/${id}`, null, "DELETE");
    dispatch(actGetApiWishlist());
  };
};

export let actRenderApiWishlist = (item) => {
  return {
    type: Type.GET_WISHLIST_API,
    payload: item,
  };
};