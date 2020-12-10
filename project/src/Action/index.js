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

export let actRenderApi = (item) => {
  return {
    type: Type.GET_CART_API,
    payload: item,
  };
};
