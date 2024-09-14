/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./cartContext";

// Step1 =>  (1) Create Context

const ProductsContext = createContext();

// Step2 =>  Create Provider

function ProductsProvider({ children }) {
  const { cart } = useCart();

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
          setProducts(res.data);

          setIsLoading(false);

          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      productItems();
    },
    [selectId],
  );

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
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
        error,
        addToWishList,
        cart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
  // Step1 =>  (2) Use Create Context
}
function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("ourproduct context was used in outside of context");
  }
  return context;
}

export { ProductsProvider, useProducts };
