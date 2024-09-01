import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page.jsx";
import { Singup } from "./components/Signup.jsx";
import { Login } from "./components/Login.jsx";
import { Wishlist } from "./components/Wishlist.jsx";
import { Cart } from "./components/Cart.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { Contact } from "./components/Contact.jsx";
import { ProductDetails } from "./pages/ProductDetails.jsx";
import { CartItems } from "./components/CartItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <Singup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "productdetails",
    element: <ProductDetails />,
  },
  {
    path: "cartitems",
    element: <CartItems />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
