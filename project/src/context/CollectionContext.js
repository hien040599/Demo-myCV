import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { CollectionReducer } from "../Reducer/CollectionReducer";
import querystring from "query-string";
import CallApi from "../API/CallApi";
import { GET_ITEMS } from "../Reducer/type";

export const collectionContext = createContext();

function CollectionProvider({ children }) {
  const [stringSearch, setStringSearch] = useState("");
  const [listItems, dispatch] = useReducer(CollectionReducer, []);
  const [paginate, setpaginate] = useState({
    page: 1,
    limit: 6,
    search: "",
  });
  const arrItems = useRef([]);
  useEffect(() => {
    let getData = async () => {
      let paramUrl = querystring.stringify(paginate);
      let resultData = await CallApi(`products?${paramUrl}`, "GET");
      arrItems.current = [...resultData.data];
      return resultData;
    };
    getData().then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: { items: res.data },
      });
    });
  }, [paginate]);

  const handlePaginationPage = (newPage) => {
    setpaginate({ ...paginate, page: newPage });
  };

  const handleChangeSeachState = (value) => {
    setStringSearch(value);
  };

  const handleSearch = () => {
    setpaginate({ ...paginate, search: stringSearch });
  };


  const collectionContextdata = {
    dispatch,
    ItemsDefault: arrItems.current,
    handlePaginationPage,
    pageNumber: paginate.page,
    handleChangeSeachState,
    handleSearch,
    stringSearch,
    listItems,
  };

  return (
    <collectionContext.Provider value={collectionContextdata}>
      {children}
    </collectionContext.Provider>
  );
}

export default CollectionProvider;
