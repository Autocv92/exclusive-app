/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectId, setSelectedId] = useState();

  useEffect(
    function () {
      async function cartItems() {
        setIsLoading(true);
        const res = await axios.get("http://localhost:3000/cart");
        setCart(res.data);
        setIsLoading(false);
      }
      cartItems();
    },
    [cart],
  );

  async function deleteHandler(id) {
    const res = await axios.delete(`http://localhost:3000/cart/${id}`);
    const newCartItems = cart.filter((items) => items.id !== id);
    console.log(newCartItems);
    setCart(res.data);
    setCart(newCartItems);
  }

  // OurProduct

  useEffect(
    function () {
      async function productItems() {
        try {
          setIsLoading(true);
          setError("");
          const res = await axios.get("http://localhost:3000/productlists");
          // const data = await res.json();
          setProducts(res.data);

          setIsLoading(false);
          setError("");
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      productItems();
    },
    [selectId],
  );

  // add products in Cart Items

  const addCartItemsHandler = (selectId, name, img) => {
    const payload = {
      id: selectId,
      name: name,
      img: img,
    };
    axios
      .post("http://localhost:3000/cart", payload)
      .then((res) => {
        setSelectedId(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToWishList = (selectId, name, img) => {
    const payload = {
      id: selectId,
      name: name,
      img: img,
    };
    axios
      .post("http://localhost:3000/wishlist", payload)
      .then((res) => {
        setSelectedId(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        deleteHandler,
        addCartItemsHandler,
        products,
        error,
        addToWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("cartcontext was used in outside ");
  return context;
}

export { CartProvider, useCart };
