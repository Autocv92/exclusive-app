import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function OurProducts() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectId, setSelectedId] = useState("23334");
  // console.log(products);

  useEffect(function () {
    async function cartItems() {
      setIsLoading(true);
      // setError(false);
      const res = await axios.get("http://localhost:3000/productlists");
      // const data = await res.json();
      setProducts(res.data);

      setIsLoading(false);
    }
    cartItems();
  }, []);

  const addCartItemsHandler = () => {
    const payload = {
      id: selectId,
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
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-5 rounded-sm bg-red-500"></div>
              <span className="font-semibold text-red-500">Our Products</span>
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
            const { id, name, img, price, isNewProduct, review } = product;

            return (
              <div id="sale-product" key={id} className="h-[350px] w-[270px]">
                <div
                  id="product-img"
                  className="relative flex h-[250px] flex-col items-center justify-center bg-neutral-100"
                >
                  {isNewProduct && (
                    <div className="absolute left-0 top-0 m-2 rounded-md bg-green-400 px-2 py-1 text-white">
                      New
                    </div>
                  )}
                  <Link to="/productdetails">
                    <div className="flex h-[180px] w-[190px] flex-col items-center justify-center">
                      <img src={img} className="h-[152px] w-[172px]" />
                    </div>
                  </Link>
                  <div className="">
                    <button
                      className="w-[175px] bg-black p-2 font-semibold text-white"
                      onClick={() => addCartItemsHandler()}
                    >
                      Add To Cart
                    </button>
                  </div>

                  <div className="absolute right-0 top-0 flex flex-col gap-2 p-2">
                    <i className="fa-regular fa-heart rounded-full bg-white p-2"></i>
                    <i className="fa-regular fa-eye rounded-full bg-white p-2"></i>
                  </div>
                </div>
                <div id="product-details" className="mt-2">
                  <h1 className="font-display text-base font-medium">{name}</h1>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-display font-medium text-red-500">
                      ${price}
                    </span>
                    <div className="flex items-center gap-2 font-display font-semibold">
                      <ul className="flex gap-1">
                        <li>
                          <i className="fa-regular fa-star text-amber-400"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star text-amber-400"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                      </ul>
                      <span className="font-display text-sm font-medium text-neutral-300">
                        ({review})
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <div className="h-5 w-5 rounded-full border-2 border-black bg-yellow-300"></div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-white">
                      <div className="h-3 w-3 rounded-full bg-red-600"></div>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-red-600"> </div>
                  </div>
                </div>
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
    </div>
  );
}
