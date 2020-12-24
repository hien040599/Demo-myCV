import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/Contact";
import WishlistPage from "./pages/Wishlist";

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/details/:slug.:id",
    exact: true,
    main: ({ match }) => <Details match={match} />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "/collection",
    exact: true,
    main: () => <Collection />,
  },
  {
    path: "/cart",
    exact: true,
    main: () => <Cart />,
  },
  {
    path: "/checkout",
    exact: true,
    main: () => <Checkout />,
  },
  {
    path: "/contact",
    exact: true,
    main: () => <ContactPage />,
  },
  {
    path: "/wishlist",
    exact: true,
    main: () => <WishlistPage />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routers;
