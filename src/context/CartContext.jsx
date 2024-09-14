/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(function () {
    async function cartItems() {
      setIsLoading(true);
      const res = await axios.get("http://localhost:3000/cart");
      setCart(res.data);

      setIsLoading(false);
    }
    cartItems();
  }, []);

  //  Add OurProductsList items in Cart Items

  async function addCartItemsHandler(selectId, name, img, price) {
    const payload = {
      id: selectId,
      name: name,
      img: img,
      price: price,
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
  //  Detete Cart items

  async function deleteHandler(id) {
    const res = await axios.delete(`http://localhost:3000/cart/${id}`);
    if (res.status === 200) {
      const newCartItems = cart.filter((items) => items.id !== id);

      setCart(newCartItems);
    }
  }

  function incrementHandler() {
    console.log("click");

    quantity < quantity + 1 ? setQuantity(quantity + 1) : setQuantity(0);
  }

  function decrementHandler() {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        deleteHandler,
        setCart,
        addCartItemsHandler,
        incrementHandler,
        decrementHandler,
        quantity,
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
