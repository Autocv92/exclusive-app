import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import ErrorMessage from "./Error/ErrorMessage.jsx";
import { Loader } from "./Loader/Loader.jsx";
import OurProductsList from "./OurProductsList.jsx";

export function OurProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectId, setSelectedId] = useState();
  // console.log(products);

  useEffect(
    function () {
      async function cartItems() {
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

      cartItems();
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

  return (
    <div className="mt-20 px-20">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-5 rounded-sm bg-red-500"></div>
                  <span className="font-semibold text-red-500">
                    Our Products
                  </span>
                </div>
                <h1 className="text-4xl font-semibold">Explore Our Products</h1>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div id="sale-product" className="mt-10">
            <div className="flex flex-wrap gap-8">
              {products.map((product) => {
                // const { id, name, img, price, isNewProduct, review } = product;

                return (
                  <div
                    id="sale-product"
                    key={product.id}
                    className="h-[350px] w-[270px]"
                  >
                    <OurProductsList
                      addCartItemsHandler={addCartItemsHandler}
                      product={product}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button className="border bg-red-600 px-4 py-2 font-display font-medium text-white">
                View All Products
              </button>
            </div>
          </div>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
