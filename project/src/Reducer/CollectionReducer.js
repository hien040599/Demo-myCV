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
      let arr0 = payload.ItemsDefault;
      let arrFilterPrice0 = arr0.filter((item) => {
        return item.price < 10;
      });
      return [...arrFilterPrice0];
    case RENDER_FILTER_PRICE1:
      let arr1 = payload.ItemsDefault;
      let arrFilterPrice1 = arr1.filter((item) => {
        return 100 > item.price && item.price > 10;
      });
      return [...arrFilterPrice1];
    case RENDER_FILTER_PRICE2:
      let arr2 = payload.ItemsDefault;
      let arrFilterPrice2 = arr2.filter((item) => {
        return 100 > item.price && item.price > 500;
      });
      return [...arrFilterPrice2];
    case RENDER_FILTER_PRICE3:
      let arr3 = payload.ItemsDefault;
      let arrFilterPrice3 = arr3.filter((item) => {
        return item.price > 500;
      });
      return [...arrFilterPrice3];
      case RENDER_FILTER_NAME:
        let arrFilter = payload.arr.filter((item) => {
          return item.namecate === payload.nameCate;
        });
        return [...arrFilter]
    default:
      return state;
  }
};
