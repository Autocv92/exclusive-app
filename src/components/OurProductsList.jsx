// import React from 'react'

import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../context/CartContext";
/* eslint-disable react/prop-types */
export function OurProductsList() {
  //  Step 3 . Consume the values

  const { products, addToWishList } = useProducts();
  const { addCartItemsHandler } = useCart();

  return (
    <div className="flex flex-wrap gap-8">
      {products.map((product) => {
        const { id, name, img, price, isNewProduct, review, discount } =
          product;

        return (
          <div className="flex" key={id}>
            <div className="hover:-translate-y-1 hover:scale-110">
              <div
                id="product-img"
                className="relative flex h-[250px] flex-col items-center justify-center bg-neutral-100"
              >
                {isNewProduct && (
                  <div className="absolute left-0 top-0 m-2 rounded-md bg-green-400 px-2 py-1 text-white">
                    New
                  </div>
                )}
                <Link to="/laptops">
                  <div className="flex h-[180px] w-[190px] flex-col items-center justify-center">
                    <img src={img} className="h-[152px] w-[172px]" />
                  </div>
                </Link>
                <div className="">
                  <button
                    className="w-[175px] bg-black p-2 font-semibold text-white"
                    onClick={() =>
                      addCartItemsHandler(id, name, img, price, discount)
                    }
                  >
                    Add To Cart
                  </button>
                </div>

                <div
                  className="absolute right-0 top-0 flex flex-col gap-2 p-2"
                  onClick={() => addToWishList(id, name, img)}
                >
                  <i className="fa-regular fa-heart rounded-full bg-white p-2"></i>
                  {/* <i className="fa-regular fa-eye rounded-full bg-white p-2"></i> */}
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
          </div>
        );
      })}
    </div>
  );
}
