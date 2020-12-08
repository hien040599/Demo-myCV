import React from "react";
import MyLink from "../../Constants/CustomLink";

let toSlug = (str) => {
  str = str.toLowerCase();

  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  str = str.replace(/([^0-9a-z-\s])/g, "");

  str = str.replace(/(\s+)/g, "-");

  str = str.replace(/^-+/g, "");

  str = str.replace(/-+$/g, "");

  return str;
};

function Item(props) {
  const { name, image, price, itemid } = props;
  const arrParams = [
    {
      name,
      to: "/details/" + toSlug(name) + "." + props.itemid,
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

  return (
    <div className="column">
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
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
