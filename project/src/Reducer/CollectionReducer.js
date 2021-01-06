import {
  DEFALUT_SORT,
  GET_ITEMS,
  SORT_HIGH_TO_LOW,
  SORT_LOW_TO_HIGH,
  RENDER_FILTER_PRICE0,
  RENDER_FILTER_PRICE1,
  RENDER_FILTER_PRICE2,
  RENDER_FILTER_PRICE3,
  RENDER_FILTER_NAME,
} from "./type";

export const CollectionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return (state = payload.items);

    case DEFALUT_SORT:
      return [...payload.ItemsDefault];
    case SORT_HIGH_TO_LOW:
      let newArr = state.sort((a, b) => b.price - a.price);
      return [...newArr];
    case SORT_LOW_TO_HIGH:
      let newArrSort = state.sort((a, b) => a.price - b.price);
      return [...newArrSort];

    case RENDER_FILTER_PRICE0:
      let arr0 = payload.ListItems;
      let arrFilterPrice0 = arr0.filter((item) => {
        if (
          payload.typing.nameCate === "" ||
          payload.typing.status === false ||
          typeof payload.typing === "string" ||
          typeof payload.typing === "string"
        ) {
          return item.price < 10;
        } else {
          return item.price < 10 && item.namecate === payload.typing.nameCate;
        }
      });
      return [...arrFilterPrice0];
    case RENDER_FILTER_PRICE1:
      let arr1 = payload.ListItems;
      let arrFilterPrice1 = arr1.filter((item) => {
        if (
          payload.typing.nameCate === "" ||
          payload.typing.status === false ||
          typeof payload.typing === "string"
        ) {
          return 100 > item.price && item.price > 10;
        } else {
          return (
            100 > item.price &&
            item.price > 10 &&
            item.namecate === payload.typing.nameCate
          );
        }
      });
      return [...arrFilterPrice1];
    case RENDER_FILTER_PRICE2:
      let arr2 = payload.ListItems;
      let arrFilterPrice2 = arr2.filter((item) => {
        if (
          payload.typing.nameCate === "" ||
          payload.typing.status === false ||
          typeof payload.typing === "string"
        ) {
          return 100 < item.price && item.price < 500;
        } else {
          return (
            100 < item.price &&
            item.price < 500 &&
            item.namecate === payload.typing.nameCate
          );
        }
      });
      return [...arrFilterPrice2];
    case RENDER_FILTER_PRICE3:
      let arr3 = payload.ListItems;
      let arrFilterPrice3 = arr3.filter((item) => {
        if (
          payload.typing.nameCate === "" ||
          payload.typing.status === false ||
          typeof payload.typing === "string"
        ) {
          return item.price > 500;
        } else {
          return item.price > 500 && item.namecate === payload.typing.nameCate;
        }
      });
      return [...arrFilterPrice3];
    case RENDER_FILTER_NAME:
      let arrFilter = payload.arr.filter((item) => {
        return item.namecate === payload.nameCate;
      });
      return [...arrFilter];

    default:
      return state;
  }
};
