import * as Type from "../Constants/ActionType";
import CallApi from "../API/CallApi";

export let actGetApiCart = () => {
  return async (dispatch) => {
    try {
      let result = await CallApi("cart", null);
      dispatch(actRenderApi(result.data));
    } catch (error) {
      alert("A data download error has occurred. Please reload the page");
    }
  };
};

export let actDeleteApiCart = (idItem) => {
  return async (dispatch) => {
    try {
      await CallApi(`cart/${idItem}`, null, "DELETE");
      dispatch(actGetApiCart());
    } catch (error) {
      alert("A data download error has occurred. Please reload the page");
    }
  };
};

export let actUpdateApiCart = (idItem, data) => {
  return async (dispatch) => {
    try {
      await CallApi(`cart/${idItem}`, data, "PUT");
      dispatch(actGetApiCart());
    } catch (error) {
      alert("A data download error has occurred. Please reload the page");
    }
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
    try {
      let result = await CallApi("wishlist", null);
      dispatch(actRenderApiWishlist(result.data));
    } catch (error) {
      alert("A data download error has occurred. Please reload the page");
    }
  };
};

export let actDeleteApiWishlist = (id) => {
  return async (dispatch) => {
    try {
      await CallApi(`wishlist/${id}`, null, "DELETE");
      dispatch(actGetApiWishlist());
    } catch (error) {
      alert("A data download error has occurred. Please reload the page");
    }
  };
};

export let actRenderApiWishlist = (item) => {
  return {
    type: Type.GET_WISHLIST_API,
    payload: item,
  };
};
