import React from 'react';
import { Link, Route } from "react-router-dom";

const MyLink = ({ lable, to, activeExact, className }) => {
    return (
      <Route
        path={to}
        exact={activeExact}
        children={() => {
          return (
            <Link className={className} to={to}>
              {lable}
            </Link>
          );
        }}
      />
    );
  };
export default MyLink;