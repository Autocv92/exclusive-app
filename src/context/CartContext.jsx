/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState();

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
      quantity: 1,
    };
    console.log(payload);
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

  //

  function incrementHandler(id) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === id); // check if the item is already in the cart

    if (isItemInCart) {
      setCart(
        cart.map(
          (
            cartItem, // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.id === id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem, // otherwise, return the cart item
          console.log(cart),
        ),
      );
    } else {
      // setCart([...cart, { ...cartItem, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  }

  // //////// Decrement function //////

  function decrementHandler(id) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === id); // check if the item is already in the cart

    if (isItemInCart) {
      setCart(
        cart.map(
          (
            cartItem, // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.id === id
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity - (cartItem.quantity >= 1 ? 1 : 0),
                }
              : cartItem, // otherwise, return the cart item
          // console.log(cart),
        ),
      );
    } else {
      // setCart([...cart, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
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
