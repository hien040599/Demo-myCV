import { applyMiddleware, createStore } from "redux";
import appReducers from "../Redux-Reducers/index";
import thunk from "redux-thunk";

export const store = createStore(appReducers, applyMiddleware(thunk));
