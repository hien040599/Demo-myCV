import React from "react";
import CallApi from "../../API/CallApi";
import MyLink from "../../Constants/CustomLink";
import { toSlug } from "../../Constants/Slug";
import * as Notify from "../../Constants/Notify";
import {
  ADD_TO_WISHLIST,
  NOTIFY_ERROR_ADD_IN_WISHLIST,
} from "../../Constants/Messages";

function Item(props) {
  const { name, image, price, itemid, getAllWishlistItem } = props;
  const arrParams = [
    {
      name,
      to: "/details/" + toSlug(name) + "." + itemid,
      activeExact: false,
    },
  ];

  let showArrParams = (array) => {
    let result = null;
    if (array.length > 0) {
      result = array.map((value, index) => {
        return (
          <MyLink
            key={index}
            lable={value.name}
            to={value.to}
            activeExact={value.activeExact}
          />
        );
      });
    }
    return result;
  };

  let handleAddItemInWishList = (id, name, image, price) => {
    let arrWishlist = JSON.parse(localStorage.getItem("WISHLIST"));
    let i = 0;
    let flag = false;
    arrWishlist.length === 0 ? (flag = true) : (flag = false);
    for (const item of arrWishlist) {
      if (name === item.name && price === item.price && image === item.image) {
        Notify.toastError(
          NOTIFY_ERROR_ADD_IN_WISHLIST,
          "top-center",
          2000,
          "notify-cart-err"
        );
        break;
      } else {
        i += 1;
        i === arrWishlist.length ? (flag = true) : (flag = false);
      }
    }
    if (flag) {
      let getApiArrWishlist = async () => {
        await CallApi("wishlist", { id, name, image, price }, "POST");
        getAllWishlistItem();
        Notify.toastSuccess(
          ADD_TO_WISHLIST,
          "bottom-left",
          1200,
          "notify-cart-success"
        );
      };

      getApiArrWishlist();
    }
  };

  return (
    <div className="column">
      {Notify.toastContainer("bottom-left", 1200)}
      <div className="wrapp-content-card">
        <div className="img-card">
          <img src={image} alt="img" />
          <MyLink
            lable={<span>View Item</span>}
            to={"/details/" + toSlug(name) + "." + itemid}
            activeExact={true}
            className="wrapp-content-card__link"
          />
        </div>
        <div className="warapp-infor-card">
          <div className="warapp-infor-card__infor">
            <h3>{showArrParams(arrParams)}</h3>
            <p>${price}</p>
          </div>
          <div className="warapp-infor-card__icon">
            <button>
              <i
                className="far fa-heart"
                onClick={() =>
                  handleAddItemInWishList(itemid, name, image, price)
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
