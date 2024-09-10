// import React from "react";
/* eslint-disable react/prop-types */

const WishlistItems = ({ wishlistItems }) => {
  console.log(wishlistItems);
  return (
    <div
      id="best-selling-product"
      className="bg-white-100 relative mt-10 h-[280px] w-[270px]"
    >
      <div className="flex h-[350px] w-[600px] gap-8">
        {wishlistItems.map((item) => {
          const { id, name, img, price, review } = item;
          return (
            <div id="sale-product" key={id} className="h-[350px] w-[270px]">
              <div
                id="product-img"
                className="relative flex h-[250px] items-center justify-center bg-neutral-100"
              >
                <div className="flex w-[270px] flex-col items-center gap-2">
                  <div className="absolute left-[-16px] top-[-10px] z-10 rounded-md bg-red-600 px-2 py-1 text-white">
                    -35%
                  </div>
                  <div className="absolute right-[10px] top-[10px] z-10 rounded-md bg-white px-2 py-1 text-black">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </div>
                  <div className="flex h-[180px] w-[190px] flex-col items-center justify-center rounded-md">
                    <img src={img} className="h-full w-[150px] object-cover" />
                  </div>
                  <button className="flex h-[41px] w-full items-center justify-center gap-1 bg-black px-20 py-2 text-white">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="font-display text-xs">Add To Cart</span>
                  </button>
                </div>
              </div>
              <div id="product-details" className="mt-2">
                <h1 className="font-display text-base font-medium">{name}</h1>
                <span className="font-display text-base font-medium">
                  ${price}
                </span>

                <div className="mt-2 flex items-center gap-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishlistItems;
