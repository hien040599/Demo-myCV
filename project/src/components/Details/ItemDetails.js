import React, { useContext, useState } from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import Item from "../ListItems/Item";
import { apiContext } from "../../context/GetApi";
import CallApi from "../../API/CallApi";
import ReactImageMagnify from "react-image-magnify";
import * as Notify from "../../Constants/Notify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADD_TO_CART,
  DELETE_ITEM_FROM_CART,
  NOTIFY_ERROR_QNT,
  NOTIFY_ERROR,
  NOTIFY_ERROR_SIZE,
  NOTIFY_ERROR_COLOR,
} from "../../Constants/Messages";
import { v4 as uuidv4 } from "uuid";

const pushListRelated = (arr = []) => {
  if (arr.length > 4) {
    arr.pop();
  }
};

function ItemDetails({ itemid }) {
  const [item, setitem] = useState([]);
  const [itemqnt, setItemqnt] = useState(1);
  let idNumber = parseInt(itemid);
  const { products, cart } = useContext(apiContext);
  let arrCart = [...cart];
  let arrNew = [...products];
  let count = 0;

  let listRelatedItems = arrNew.filter((value) => {
    count++;
    if (count <= 5) {
      return value.id !== idNumber;
    }
    return "";
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setitem({ ...item, [name]: value });
  };
  let changeIncreaseItem = () => {
    setItemqnt(itemqnt + 1);
    Notify.toastSuccess(
      ADD_TO_CART,
      "bottom-left",
      1200,
      "notify-cart-success"
    );
  };
  let changeDecreaseItem = () => {
    if (itemqnt > 1) {
      setItemqnt(itemqnt - 1);
      Notify.toastWarn(
        DELETE_ITEM_FROM_CART,
        "bottom-left",
        1200,
        "notify-cart-warn"
      );
    } else {
      setItemqnt(1);
      Notify.toastError(
        NOTIFY_ERROR_QNT,
        "top-center",
        2000,
        "notify-cart-err"
      );
    }
  };

  let showinforItem = (value) => {
    if (item.length === 0) {
      Notify.toastError(NOTIFY_ERROR, "top-center", 2000, "notify-cart-err");
    } else if (!item.size && item.color) {
      Notify.toastError(
        NOTIFY_ERROR_SIZE,
        "top-center",
        2000,
        "notify-cart-err"
      );
    } else if (!item.color && item.size) {
      Notify.toastError(
        NOTIFY_ERROR_COLOR,
        "top-center",
        2000,
        "notify-cart-err"
      );
    } else {
      let flag = false;
      let i = 0;

      if (arrCart.length > 0) {
        for (const itemCart of arrCart) {
          if (
            value.name === itemCart.name &&
            item.color === itemCart.color &&
            item.size === itemCart.size
          ) {
            CallApi(
              `cart/${itemCart.id}`,
              {
                ...value,
                ...item,
                quantity: itemCart.quantity + itemqnt,
                id: itemCart.id,
              },
              "PUT"
            );
            Notify.toastSuccess(
              ADD_TO_CART,
              "bottom-left",
              1200,
              "notify-cart-success"
            );
            break;
          } else {
            i += 1;
            if (i === arrCart.length) {
              flag = true;
            }
          }
        }
      } else {
        flag = true;
      }

      if (flag) {
        CallApi(
          "cart",
          { ...value, ...item, quantity: itemqnt, id: uuidv4() },
          "POST"
        );
        Notify.toastSuccess(
          ADD_TO_CART,
          "bottom-left",
          1200,
          "notify-cart-success"
        );
      }
    }
  };

  pushListRelated(listRelatedItems);

  return (
    <div className="wrapper">
      <Directional namePage={"Details"} />
      {Notify.toastContainer("bottom-left", 1200)}
      <div className="container">
        {products.map((value, index) => {
          if (value.id === idNumber) {
            return (
              <div key={index} className="wrapper">
                <div className="row">
                  <div className="image-item">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: value.image,
                        },
                        imageClassName: "img-item",
                        largeImage: {
                          src: value.image,
                          width: 2000,
                          height: 2800,
                        },
                        enlargedImageClassName: "img-item-zoom",
                      }}
                    />
                  </div>
                  <div className="wrapp-infor">
                    <h2>{value.name}</h2>
                    <span className="wrapp-infor__price">${value.price}</span>
                    <div className="wrapp-infor__des">
                      <p>{value.description}</p>
                    </div>
                    <div className="row">
                      <div className="wrapp-infor__option-shape">
                        <div className="wrapp-infor__option-shape__color">
                          <p className="wrapp-infor__option-shape__color__text">
                            Color
                          </p>
                          <div className="wrapp-infor__option-shape__color__select-color">
                            {value.color.map((value, index) => {
                              return (
                                <label
                                  key={index}
                                  htmlFor={`color-item-${value}`}
                                >
                                  <input
                                    type="radio"
                                    name="color"
                                    id={`color-item-${value}`}
                                    value={`${value}`}
                                    onChange={(e) => handleChange(e)}
                                  />
                                  <span
                                    style={{ backgroundColor: `${value}` }}
                                  ></span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        <div className="wrapp-infor__option-shape__size">
                          <p className="wrapp-infor__option-shape__size__text">
                            Size
                          </p>

                          {value.size.map((value, index) => {
                            return (
                              <label key={index} htmlFor={`size-item-${value}`}>
                                <input
                                  type="radio"
                                  name="size"
                                  id={`size-item-${value}`}
                                  value={`${value}`}
                                  onChange={(e) => handleChange(e)}
                                />
                                <span>{`${value}`}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="wrapp-infor__options">
                      <div className="wrapp-infor__options__manipulation">
                        <div className="wrapp-infor__options__manipulation__qnt">
                          <button onClick={() => changeDecreaseItem()}>
                            -
                          </button>
                          <input
                            type="text"
                            value={itemqnt}
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <button onClick={() => changeIncreaseItem()}>
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => showinforItem(value)}
                          className="wrapp-infor__options__manipulation__add-cart"
                        >
                          ADD TO CART
                        </button>
                        <div className="wrapp-infor__options__manipulation__heart">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <p>
                        Category :<a href="google.com.vn">{value.namecate}</a>
                      </p>
                      <div className="wrapp-infor__options__icon">
                        <a href="google.com.vn">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="google.com.vn">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="google.com.vn">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="google.com.vn">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="description">
                    <h2 className="description__title">Description</h2>
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            );
          }
          return "";
        })}
        <div className="row">
          <div className="row__show-related-items">
            <div className="row__show-related-items__text">
              <h2>Related Products</h2>
              <div></div>
            </div>
          </div>

          {listRelatedItems.map((item, index) => {
            return (
              <Item
                key={index}
                itemid={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
