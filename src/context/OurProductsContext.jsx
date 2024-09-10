/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./cartContext";

// Step1 =>  (1) Create Context

const OurProductsContext = createContext();

// Step2 =>  Create Provider

function OurProductsProvider({ children }) {
  const { cart, setCart } = useCart();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectId, setSelectedId] = useState();

  useEffect(
    function () {
      async function productItems() {
        try {
          setIsLoading(true);
          setError("");
          const res = await axios.get("http://localhost:3000/productlists");
          // const data = await res.json();
          setProducts(res.data);
          console.log(res.data);
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
    <OurProductsContext.Provider
      value={{
        isLoading,
        products,
        error,
        addToWishList,
        addCartItemsHandler,
        cart,
      }}
    >
      {children}
    </OurProductsContext.Provider>
  );
  // Step1 =>  (2) Use Create Context
}
function useOurProducts() {
  const context = useContext(OurProductsContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("ourproduct context was used in outside of context");
  }
  return context;
}

export { OurProductsProvider, useOurProducts };
