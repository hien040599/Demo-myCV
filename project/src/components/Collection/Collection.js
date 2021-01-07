import React, { useContext } from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import Item from "../ListItems/Item";
import ListCategory from "./ListCategory";
import Pagination from "react-js-pagination";
import { collectionContext } from "../../context/CollectionContext";
import { apiContext } from "../../context/GetApi";
import {
  DEFALUT_SORT,
  GET_ITEMS,
  RENDER_FILTER_NAME,
  RENDER_FILTER_PRICE0,
  RENDER_FILTER_PRICE1,
  RENDER_FILTER_PRICE2,
  RENDER_FILTER_PRICE3,
  SORT_HIGH_TO_LOW,
  SORT_LOW_TO_HIGH,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW1,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW2,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW0,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH0,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH1,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH2,
  RENDER_FILTER_SORT_CATE_HIGH_TO_LOW3,
  RENDER_FILTER_SORT_CATE_LOW_TO_HIGH3,
} from "../../Reducer/type";
import * as Notify from "../../Constants/Notify";
import { NOTIFY_ERROR_SEARCH } from "../../Constants/Messages";

function Collection({ getAllWishlistItem }) {
  const {
    listItems,
    dispatch,
    ItemsDefault,
    handlePaginationPage,
    pageNumber,
    handleChangeSeachState,
    handleSearch,
    stringSearch,
    typing,
    setTiping,
    getInput,
    sortByCate,
    setsortBYCate,
    getNameCate,
    setgetNameCate,
    idInput,
    setidInput,
  } = useContext(collectionContext);

  const { products } = useContext(apiContext);

  let newListItems = [...listItems];

  let defaultSort = () => {
    dispatch({
      type: DEFALUT_SORT,
      payload: {
        ItemsDefault,
      },
    });
  };

  let sortHighToLow = () => {
    dispatch({
      type: SORT_HIGH_TO_LOW,
    });
    setsortBYCate("SORT_HIGH_TO_LOW");
  };

  let sortLowToHigh = () => {
    dispatch({
      type: SORT_LOW_TO_HIGH,
    });
    setsortBYCate("SORT_LOW_TO_HIGH");
  };

  let renderFilterName = (nameCate) => {
    dispatch({
      type: RENDER_FILTER_NAME,
      payload: {
        arr: products,
        nameCate,
        idInput,
      },
    });

    if (sortByCate === "SORT_HIGH_TO_LOW") {
      dispatch({
        type: RENDER_FILTER_SORT_CATE_HIGH_TO_LOW,
        payload: {
          arr: products,
          nameCate,
        },
      });
    } else if (sortByCate === "SORT_LOW_TO_HIGH")
      dispatch({
        type: RENDER_FILTER_SORT_CATE_LOW_TO_HIGH,
        payload: {
          arr: products,
          nameCate,
        },
      });
  };

  let renderFilterPrice0 = () => {
    let getInputElement = document.getElementById("check-price-4").id;

    dispatch({
      type: RENDER_FILTER_PRICE0,
      payload: {
        ListItems: products,
        typing,
      },
    });
    if (sortByCate === "SORT_HIGH_TO_LOW") {
      dispatch({
        type: RENDER_FILTER_SORT_CATE_HIGH_TO_LOW0,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    } else if (sortByCate === "SORT_LOW_TO_HIGH")
      dispatch({
        type: RENDER_FILTER_SORT_CATE_LOW_TO_HIGH0,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    setidInput(getInputElement);
  };

  let renderFilterPrice1 = () => {
    let getInputElement = document.getElementById("check-price-5").id;
    dispatch({
      type: RENDER_FILTER_PRICE1,
      payload: {
        ListItems: products,
        typing,
      },
    });
    if (sortByCate === "SORT_HIGH_TO_LOW") {
      dispatch({
        type: RENDER_FILTER_SORT_CATE_HIGH_TO_LOW1,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    } else if (sortByCate === "SORT_LOW_TO_HIGH")
      dispatch({
        type: RENDER_FILTER_SORT_CATE_LOW_TO_HIGH1,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    setidInput(getInputElement);
  };

  let renderFilterPrice2 = () => {
    let getInputElement = document.getElementById("check-price-6").id;
    dispatch({
      type: RENDER_FILTER_PRICE2,
      payload: {
        ListItems: products,
        typing,
      },
    });
    if (sortByCate === "SORT_HIGH_TO_LOW") {
      dispatch({
        type: RENDER_FILTER_SORT_CATE_HIGH_TO_LOW2,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    } else if (sortByCate === "SORT_LOW_TO_HIGH")
      dispatch({
        type: RENDER_FILTER_SORT_CATE_LOW_TO_HIGH2,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    setidInput(getInputElement);
  };

  let renderFilterPrice3 = () => {
    let getInputElement = document.getElementById("check-price-7").id;
    dispatch({
      type: RENDER_FILTER_PRICE3,
      payload: {
        ListItems: products,
        typing,
      },
    });
    if (sortByCate === "SORT_HIGH_TO_LOW") {
      dispatch({
        type: RENDER_FILTER_SORT_CATE_HIGH_TO_LOW3,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    } else if (sortByCate === "SORT_LOW_TO_HIGH")
      dispatch({
        type: RENDER_FILTER_SORT_CATE_LOW_TO_HIGH3,
        payload: {
          arr: products,
          nameCate: getNameCate,
        },
      });
    setidInput(getInputElement);
  };

  let renderFilterPrice4 = () => {
    dispatch({
      type: GET_ITEMS,
      payload: { items: ItemsDefault },
    });
  };

  let handlePagination = (newPage) => {
    handlePaginationPage(newPage);
  };

  let handleChangeSearch = (e) => {
    let val = e.target.value;
    handleChangeSeachState(val);
  };

  let handleSubmitForm = (e) => {
    e.preventDefault();
  };

  let handleSubmit = () => {
    handleSearch();
    handleChangeSeachState("");

    let i = 0;
    for (const val of products) {
      if (val.name.includes(stringSearch) === true) {
        break;
      } else {
        i += 1;
        if (i === products.length) {
          Notify.toastError(
            NOTIFY_ERROR_SEARCH,
            "top-center",
            2000,
            "notify-cart-err"
          );
        }
      }
    }
  };

  let changeTyping = (category) => {
    setTiping(category);
  };

  return (
    <div className="wrapper">
      {Notify.toastContainer("bottom-left", 1200)}
      <Directional namePage={"Collection"} />
      <div className="container">
        <div className="row">
          <div className="col-collection">
            <div className="col-collection__wrap-content">
              <div className="col-collection__wrap-content__search">
                <h4>Search</h4>
                <div className="col-collection__wrap-content__search__search-box">
                  <form onSubmit={(e) => handleSubmitForm(e)}>
                    <input
                      ref={getInput}
                      type="text"
                      placeholder="Search here..."
                      value={stringSearch}
                      onChange={(e) => handleChangeSearch(e)}
                    />
                    <button>
                      <i
                        className="fas fa-search"
                        onClick={() => handleSubmit()}
                      ></i>
                    </button>
                  </form>
                </div>
              </div>
              <ListCategory
                renderFilterCate={renderFilterName}
                changeTyping={changeTyping}
                changeGetNameCate={setgetNameCate}
              />
              <ul className="col-collection__wrap-content__list">
                <li className="col-collection__wrap-content__list__item">
                  <h4>Price</h4>
                </li>
                <li
                  onClick={() => renderFilterPrice0()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="radio" name="choose-price" id="check-price-4" />
                  <label htmlFor="check-price-4">Below $10</label>
                </li>
                <li
                  onClick={() => renderFilterPrice1()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="radio" name="choose-price" id="check-price-5" />
                  <label htmlFor="check-price-5">$10 - $100</label>
                </li>
                <li
                  onClick={() => renderFilterPrice2()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="radio" name="choose-price" id="check-price-6" />
                  <label htmlFor="check-price-6">$100 - $500</label>
                </li>
                <li
                  onClick={() => renderFilterPrice3()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="radio" name="choose-price" id="check-price-7" />
                  <label htmlFor="check-price-7">Above $500</label>
                </li>
                <li
                  onClick={() => renderFilterPrice4()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="radio" name="choose-price" id="check-price-8" />
                  <label htmlFor="check-price-8">All</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-collection-items">
            <div className="col-collection-items__sort">
              <div className="col-collection-items__sort__select">
                <div className="col-collection-items__sort__select__wrap-header">
                  <p>Default</p>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>

                <ul className="col-collection-items__sort__select__list">
                  <li
                    onClick={() => defaultSort()}
                    className="col-collection-items__sort__select__list__item"
                  >
                    Default
                  </li>
                  <li
                    onClick={() => sortHighToLow(newListItems)}
                    className="col-collection-items__sort__select__list__item"
                  >
                    Price - High to Low
                  </li>
                  <li
                    onClick={() => sortLowToHigh(newListItems)}
                    className="col-collection-items__sort__select__list__item"
                  >
                    Price - Low to High
                  </li>
                </ul>
              </div>
            </div>

            {newListItems.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  itemid={item.id}
                  getAllWishlistItem={getAllWishlistItem}
                  rating={item.rating}
                />
              );
            })}

            <div className="col-collection-items__pagination">
              <div className="col-collection-items__pagination-wrap-content">
                <Pagination
                  activePage={pageNumber}
                  itemsCountPerPage={6}
                  totalItemsCount={30}
                  pageRangeDisplayed={3}
                  onChange={handlePagination}
                  innerClass={"col-collection-items__pagination-list"}
                  activeLinkClass={"activeclass"}
                  hideNavigation={true}
                  disabledClass={"disabledclass"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
