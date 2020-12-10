import * as Type from "../Constants/ActionType";
import CallApi from "../API/CallApi";

export let actGetApiCart = () => {
  return (dispatch) => {
    CallApi("cart", null).then(res =>dispatch(actRenderApi(res.data)))
  }
};

export let actRenderApi = (item) => {
  return {
    type: Type.GET_CART_API,
    payload: item
  };
};
