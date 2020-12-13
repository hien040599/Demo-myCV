import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import ItemDetails from "../components/Details/ItemDetails";
import GetApi from "../context/GetApi";
import { connect } from "react-redux";
import { actGetApiCart } from "../Action";

function Details(props) {
  const { match, item, getAllCartItem } = props;

  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header item={item} />
        </section>

        <section>
          <ItemDetails
            itemid={match.params.id}
            getAllCartItem={getAllCartItem}
          />
        </section>

        <section>
          <Footer />
        </section>
      </GetApi>
    </div>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Details);
