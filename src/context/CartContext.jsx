/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function cartItems() {
      setIsLoading(true);
      const res = await axios.get("http://localhost:3000/cart");
      setCart(res.data);
      setIsLoading(false);
    }
    cartItems();
  }, []);

  async function deleteHandler(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/cart/${id}`);
      if (res.status === 200) {
        const cartData = cart.filter((item) => item.id !== id);
        setCart(cartData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addCartItemsHandler(selectId, name, img) {
    const payload = {
      id: selectId,
      name: name,
      img: img,
    };

    try {
      const res = await axios.post("http://localhost:3000/cart", payload);
      if (res.status === 201) {
        setCart([...cart, res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, isLoading, deleteHandler, addCartItemsHandler }}
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
