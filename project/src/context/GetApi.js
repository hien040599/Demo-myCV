import React, { createContext, useEffect, useState } from "react";
import CallApi from "../API/CallApi";

export const apiContext = createContext();

function GetApiProvider({ children }) {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([])
  useEffect(() => {
    let getData = async () => {
      let resultData = await CallApi("products", "GET");
      setproducts(resultData.data);
    };
    getData();
  }, []);

  useEffect(() => {
    let getData = async () => {
      let resultData = await CallApi("cart", "GET");
      setcart(resultData.data);
    };
    getData();
  }, []);

  const apiContextdata = {
    products,
    cart
  };
  return (
    <apiContext.Provider value={apiContextdata}>{children}</apiContext.Provider>
  );
}

export default GetApiProvider;
