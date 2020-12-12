import React, { useEffect } from "react";
import Menu from "./Menu";
import "./Css/main.css";
import useSearchBox from "../../hooks/useSearchBox";
import { connect } from "react-redux";
import { actGetApiCart } from "../../Action";

function Header(props) {
  const { item, getAllCartItem } = props;

  useEffect(() => {
    getAllCartItem();
  }, [getAllCartItem]);

  useSearchBox();

  return (
    <header className="header-shop">
      <div className="header-shop__container">
        <div className="header-shop__container__row">
          <Menu arrLength={item.length} item={item} />
        </div>
      </div>
    </header>
  );
}
let mapStateToProps = (state) => {
  return {
    item: state.Cart,
  };
};

let mapDispatchtoProps = (dispatch, props) => {
  return {
    getAllCartItem: () => dispatch(actGetApiCart()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
