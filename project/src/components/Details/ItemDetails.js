import React, { useContext, useState } from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";
import Item from "../ListItems/Item";
import { apiContext } from "../../context/GetApi";
import CallApi from "../../API/CallApi";
import ReactImageMagnify from "react-image-magnify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pushListRelated = (arr = []) => {
  if (arr.length > 4) {
    arr.pop();
  }
};

function ItemDetails({ itemid }) {
  const [item, setitem] = useState([]);
  const [itemqnt, setItemqnt] = useState(1);
  let idNumber = parseInt(itemid);
  const { products } = useContext(apiContext);
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
    toast.success("Added To Cart", {
      position: "bottom-left",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  let changeDecreaseItem = () => {
    if (itemqnt > 1) {
      setItemqnt(itemqnt - 1);
      toast.warn("Item Decremented From Cart", {
        position: "bottom-left",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setItemqnt(1);
      toast.error("Number Of Products Cannot Be Less Than 1 !!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  let showinforItem = (value) => {
    if (item.length === 0) {
      alert("Please choose the color and size of the item");
    } else if (!item.size && item.color) {
      alert("Please choose the size of the item");
    } else if (!item.color && item.size) {
      alert("Please choose the color of the item");
    } else {
      CallApi("cart", { ...value, ...item, quantity: itemqnt }, "POST");
    }
  };

  pushListRelated(listRelatedItems);

  return (
    <div className="wrapper">
      <Directional namePage={"Details"} />
      <ToastContainer
        position="bottom-left"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
