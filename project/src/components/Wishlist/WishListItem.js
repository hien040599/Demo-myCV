import React from "react";
import MyLink from "../../Constants/CustomLink";
import { DELETE_ITEM_FROM_WISHLIST } from "../../Constants/Messages";
import * as Notify from "../../Constants/Notify";
import { toSlug } from "../../Constants/Slug";

function WishListItem({ iditem, name, img, price, deleteWishlistItem }) {
  let handleDelete = (id) => {
    deleteWishlistItem(id);
    Notify.toastWarn(
      DELETE_ITEM_FROM_WISHLIST,
      "bottom-left",
      1200,
      "notify-cart-warn"
    );
  };

  return (
    <tr>
      <td>
        {Notify.toastContainer("bottom-left", 1200)}
        <img src={img} alt="imgs" />
      </td>
      <td>
        <div className="content-wishlist__name">
          <MyLink lable={name} to={"/"} activeExact={true} />
        </div>
      </td>
      <td>
        <span>${price}</span>
      </td>
      <td>
        <div className="content-cart__qnt">
          <MyLink
            lable={"View Item"}
            to={"/details/" + toSlug(name) + "." + iditem}
            activeExact={true}
          />
        </div>
      </td>
      <td>
        <span>
          <div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleDelete(iditem)}
            ></i>
          </div>
        </span>
      </td>
    </tr>
  );
}

export default WishListItem;
