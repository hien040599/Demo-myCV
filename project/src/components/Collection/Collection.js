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

  let sortHighToLow = (arr) => {
    dispatch({
      type: SORT_HIGH_TO_LOW,
    });
  };

  let sortLowToHigh = (arr) => {
    dispatch({
      type: SORT_LOW_TO_HIGH,
    });
  };

  let renderFilterName = (nameCate) => {
    dispatch({
      type: RENDER_FILTER_NAME,
      payload: {
        arr: ItemsDefault,
        nameCate,
      },
    });
  };

  let renderFilterPrice0 = () => {
    dispatch({
      type: RENDER_FILTER_PRICE0,
      payload: {
        ItemsDefault,
      },
    });
  };

  let renderFilterPrice1 = () => {
    dispatch({
      type: RENDER_FILTER_PRICE1,
      payload: {
        ItemsDefault,
      },
    });
  };

  let renderFilterPrice2 = () => {
    dispatch({
      type: RENDER_FILTER_PRICE2,
      payload: {
        ItemsDefault,
      },
    });
  };

  let renderFilterPrice3 = () => {
    dispatch({
      type: RENDER_FILTER_PRICE3,
      payload: {
        ItemsDefault,
      },
    });
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
              <ListCategory renderFilterCate={renderFilterName} />
              <ul className="col-collection__wrap-content__list">
                <li className="col-collection__wrap-content__list__item">
                  <h4>Price</h4>
                </li>
                <li
                  onClick={() => renderFilterPrice0()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="checkbox" id="check-price-4" />
                  <label htmlFor="check-price-4">Below $10</label>
                </li>
                <li
                  onClick={() => renderFilterPrice1()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="checkbox" id="check-price-5" />
                  <label htmlFor="check-price-5">$10 - $100</label>
                </li>
                <li
                  onClick={() => renderFilterPrice2()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="checkbox" id="check-price-6" />
                  <label htmlFor="check-price-6">$100 - $500</label>
                </li>
                <li
                  onClick={() => renderFilterPrice3()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="checkbox" id="check-price-7" />
                  <label htmlFor="check-price-7">Above $500</label>
                </li>
                <li
                  onClick={() => renderFilterPrice4()}
                  className="col-collection__wrap-content__list__item"
                >
                  <input type="checkbox" id="check-price-8" />
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
