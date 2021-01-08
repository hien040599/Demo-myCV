import React, { createContext, useEffect, useState } from "react";
import CallApi from "../API/CallApi";

export const apiContext = createContext();

function GetApiProvider({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let resultData = await CallApi("products", "GET");
        setproducts(resultData.data);
      } catch (error) {
        alert("A data download error has occurred. Please reload the page");
      }
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
