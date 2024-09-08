import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout/Layout.jsx";
import { Header } from "./components/Header/Header.jsx";
import ErrorPage from "./components/Error/error-page.jsx";
import { Singup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";
import Wishlist, {
  loader as wishlistLoader,
} from "./components/Whishlist/Wishlist.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Contact } from "./pages/Contact.jsx";

import { OurProducts } from "./components/OurProducts.jsx";
import { CartItems } from "./components/Cart/CartItems.jsx";
import Home from "./pages/Home.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Order from "./components/Order/Order.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import React from "react";
import { ProductDetails } from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <Home />,
        path: "/",
        element: <ErrorPage />,
      },
      {
        path: "",
        element: <Header />,
      },
      {
        path: "signup",
        element: <Singup />,
      },
      {
        path: "login",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
        loader: wishlistLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
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
        path: "cartitems",
        element: <CartItems />,
      },
      {
        path: "ourproduct",
        element: <OurProducts />,
        errorElement: <ErrorPage />,
      },
      {
        path: "myprofile",
        element: <MyProfile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartProvider>,
);
