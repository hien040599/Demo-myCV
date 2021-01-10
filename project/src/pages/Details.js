import React, { useEffect } from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import ItemDetails from "../components/Details/ItemDetails";
import GetApi from "../context/GetApi";
import { useDispatch, useSelector } from "react-redux";
import { actGetApiCart } from "../Action";

function Details(props) {
  const { match } = props;
  const listCart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetApiCart());
  }, [dispatch]);

  let getAllCartItem = () => {
    dispatch(actGetApiCart());
  };

  return (
    <div className="wrapper">
      <GetApi>
        <section>
          <Header />
        </section>

        <section>
          <ItemDetails
            cart={listCart}
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

export default Details;

