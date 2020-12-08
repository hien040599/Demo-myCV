import React from "react";
import Routers from "./Routers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BtnTop from "./components/BtnBackToTop/BtnTop";
import useBtnTop from "./hooks/useBtnTop";
import useLoading from "./hooks/useLoading";
import LoadingPage from "./components/loading/LoadingPage";

function App() {
  useBtnTop();
  useLoading();
  let showRouters = (arrRoute) => {
    let result = null;
    if (arrRoute.length > 0) {
      result = arrRoute.map((value, index) => {
        return (
          <Route
            key={index}
            path={value.path}
            exact={value.exact}
            component={value.main}
          />
        );
      });
    }
    return result;
  };
  return (
    <Router>
      <div className="wrapper">
        <BtnTop />
        <LoadingPage />
        <Switch>{showRouters(Routers)}</Switch>
      </div>
    </Router>
  );
}

export default App;
