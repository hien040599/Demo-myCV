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
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW0,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW1,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW2,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW3,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH0,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH1,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH2,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH3,
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
          typeof payload.typing === "string"
        ) {
          return item.price < 10;
        } else {
          return item.price < 10 && item.namecate === payload.typing.nameCate;
        }
      });
      let resultFilterPrice0 =
        arrFilterPrice0.length > 6
          ? arrFilterPrice0.splice(0, 6)
          : arrFilterPrice0;
      return [...resultFilterPrice0];
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
      let resultFilterPrice1 =
        arrFilterPrice1.length > 6
          ? arrFilterPrice1.splice(0, 6)
          : arrFilterPrice1;
      return [...resultFilterPrice1];
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
      let resultFilterPrice2 =
        arrFilterPrice2.length > 6
          ? arrFilterPrice2.splice(0, 6)
          : arrFilterPrice2;
      return [...resultFilterPrice2];
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
      let resultFilterPrice3 =
        arrFilterPrice3.length > 6
          ? arrFilterPrice3.splice(0, 6)
          : arrFilterPrice3;
      return [...resultFilterPrice3];
    case RENDER_FILTER_NAME:
      let arrFilter = payload.arr.filter((item) => {
        if (payload.idInput.length === 0) {
          return item.namecate === payload.nameCate;
        } else if (payload.idInput === "check-price-4") {
          return item.namecate === payload.nameCate && item.price < 10;
        } else if (payload.idInput === "check-price-5") {
          return (
            item.namecate === payload.nameCate &&
            item.price > 10 &&
            item.price < 100
          );
        } else if (payload.idInput === "check-price-6") {
          return (
            item.namecate === payload.nameCate &&
            item.price > 100 &&
            item.price < 500
          );
        } else {
          return item.namecate === payload.nameCate && item.price > 500;
        }
      });
      return [...arrFilter];

    case RENDER_FILTER_SORT_CATE_HIGH_TO_LOW:
      let arrFilterByCateHighToLow = payload.arr.filter((item) => {
        return item.namecate === payload.nameCate;
      });
      return [...arrFilterByCateHighToLow.sort((a, b) => b.price - a.price)];
    case RENDER_FILTER_SORT_CATE_LOW_TO_HIGH:
      let arrFilterByCateLowToHigh = payload.arr.filter((item) => {
        return item.namecate === payload.nameCate;
      });
      return [...arrFilterByCateLowToHigh.sort((a, b) => a.price - b.price)];

    case RENDER_FILTER_SORT_CATE_HIGH_TO_LOW0:
      let arrFilterByCateHighToLow0 = payload.arr.filter((item) => {
        return item.namecate === payload.nameCate && 10 > item.price;
      });
      return [...arrFilterByCateHighToLow0.sort((a, b) => b.price - a.price)];
    case RENDER_FILTER_SORT_CATE_HIGH_TO_LOW1:
      let arrFilterByCateHighToLow1 = payload.arr.filter((item) => {
        return (
          100 > item.price &&
          item.price > 10 &&
          item.namecate === payload.nameCate
        );
      });
      return [...arrFilterByCateHighToLow1.sort((a, b) => b.price - a.price)];
    case RENDER_FILTER_SORT_CATE_HIGH_TO_LOW2:
      let arrFilterByCateHighToLow2 = payload.arr.filter((item) => {
        return (
          item.namecate === payload.nameCate &&
          500 > item.price &&
          item.price > 100
        );
      });
      return [...arrFilterByCateHighToLow2.sort((a, b) => b.price - a.price)];
    case RENDER_FILTER_SORT_CATE_HIGH_TO_LOW3:
      let arrFilterByCateHighToLow3 = payload.arr.filter((item) => {
        return item.price > 500 && item.namecate === payload.nameCate;
      });
      return [...arrFilterByCateHighToLow3.sort((a, b) => b.price - a.price)];

    case RENDER_FILTER_SORT_CATE_LOW_TO_HIGH0:
      let arrFilterByCateLowToHigh0 = payload.arr.filter((item) => {
        return item.namecate === payload.nameCate && 10 > item.price;
      });
      return [...arrFilterByCateLowToHigh0.sort((a, b) => a.price - b.price)];
    case RENDER_FILTER_SORT_CATE_LOW_TO_HIGH1:
      let arrFilterByCateLowToHigh1 = payload.arr.filter((item) => {
        return (
          100 > item.price &&
          item.price > 10 &&
          item.namecate === payload.nameCate
        );
      });
      return [...arrFilterByCateLowToHigh1.sort((a, b) => a.price - b.price)];
    case RENDER_FILTER_SORT_CATE_LOW_TO_HIGH2:
      let arrFilterByCateLowToHigh2 = payload.arr.filter((item) => {
        return (
          item.namecate === payload.nameCate &&
          500 > item.price &&
          item.price > 100
        );
      });
      return [...arrFilterByCateLowToHigh2.sort((a, b) => a.price - b.price)];
    case RENDER_FILTER_SORT_CATE_LOW_TO_HIGH3:
      let arrFilterByCateLowToHigh3 = payload.arr.filter((item) => {
        return item.price > 500 && item.namecate === payload.nameCate;
      });
      return [...arrFilterByCateLowToHigh3.sort((a, b) => a.price - b.price)];

    default:
      return state;
  }
};
