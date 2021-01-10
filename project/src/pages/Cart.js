import React, { useEffect } from "react";
import Cart from "../components/shopping Cart/Cart";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  actDeleteApiCart,
  actGetApiCart,
  actUpdateApiCart,
} from "../Action/index";
import CartEmpty from "../components/CartEmpty/CartEmpty";

function CartPage(props) {
  const item = useSelector((state) => state.Cart);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(actGetApiCart());
  }, [dispath]);

  let deleteCartItem = (idItem) => {
    dispath(actDeleteApiCart(idItem));
  };

  let updateCartItem = (idItem, data) => {
    dispath(actUpdateApiCart(idItem, data));
  };

  return (
    <div className="wrapper">
      <section>
        <Header />
      </section>

      <section>
        {item.length > 0 ? (
          <Cart
            item={item}
            deleteCartItem={deleteCartItem}
            updateCartItem={updateCartItem}
          />
        ) : (
          <CartEmpty />
        )}
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default CartPage;
