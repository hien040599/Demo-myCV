import React, { createContext, useEffect, useState } from "react";
import CallApi from "../API/CallApi";

export const apiContext = createContext();

function GetApiProvider({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let resultData = await CallApi("products", "GET");
      setproducts(resultData.data);
    };
    getData();
  }, []);

  const apiContextdata = {
    products,
  };
  return (
    <apiContext.Provider value={apiContextdata}>{children}</apiContext.Provider>
  );
}

export default GetApiProvider;
