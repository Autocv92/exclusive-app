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
    const res = await axios.delete(`http://localhost:3000/cart/${id}`);
    setCart(res.data);
  }

  return (
    <CartContext.Provider value={{ cart, isLoading, deleteHandler }}>
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
