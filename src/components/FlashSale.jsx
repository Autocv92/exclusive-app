export function FlashSale() {
  const productList = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      img: "product1.png",
      price: 160,
      discountInPercentage: 40,
      discountedPrice: 120,
      review: 88,
      rating: 5,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      img: "product2.png",
      price: 1160,
      discountInPercentage: 35,
      discountedPrice: 960,
      review: 75,
      rating: 5,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      img: "product3.png",
      price: 400,
      discountInPercentage: 30,
      discountedPrice: 370,
      review: 99,
      rating: 5,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      img: "product4.png",
      price: 400,
      discountInPercentage: 25,
      discountedPrice: 375,
      review: 75,
      rating: 5,
    },
  ];

  return (
    <div className="mt-20 px-20">
      <div className="flex justify-between">
        <div className="flex w-[600px] items-end gap-4">
          <div className="flex h-[103px] w-[211px] flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-5 rounded-sm bg-red-500"></div>
              <span className="font-semibold text-red-500">Today’s</span>
            </div>
            <h1 className="text-4xl font-semibold">Flash Sales</h1>
          </div>
          <div className="flex gap-4">
            <div>
              <span className="font-display text-xs font-medium">Days</span>
              <h1 className="items-center font-body text-3xl font-bold">03</h1>
            </div>
            <div className="mb-2 flex flex-col justify-end gap-2">
              <div className="h-1 w-1 rounded bg-red-700"></div>
              <div className="h-1 w-1 rounded bg-red-700"></div>
            </div>
            <div>
              <span className="font-display text-xs font-medium">Hours</span>
              <h1 className="items-center font-body text-3xl font-bold">23</h1>
            </div>
            <div className="mb-2 flex flex-col justify-end gap-2">
              <div className="h-1 w-1 rounded bg-red-700"></div>
              <div className="h-1 w-1 rounded bg-red-700"></div>
            </div>
            <div>
              <span className="font-display text-xs font-medium">Minutes</span>
              <h1 className="items-center font-body text-3xl font-bold">19</h1>
            </div>
            <div className="mb-2 flex flex-col justify-end gap-2">
              <div className="h-1 w-1 rounded bg-red-700"></div>
              <div className="h-1 w-1 rounded bg-red-700"></div>
            </div>
            <div>
              <span className="font-display text-xs font-medium">Seconds</span>
              <h1 className="items-center font-body text-3xl font-bold">56</h1>
            </div>
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
        <div className="flex gap-8">
          {productList.map((product) => {
            const {
              id,
              name,
              img,
              price,
              discountInPercentage,
              discountedPrice,
              review,
            } = product;

            return (
              <div id="sale-product" key={id} className="h-[350px] w-[270px]">
                <div
                  id="product-img"
                  className="relative flex h-[250px] items-center justify-center bg-neutral-100"
                >
                  <div className="absolute left-0 top-0 m-2 rounded-md bg-red-600 px-2 py-1 text-white">
                    -{discountInPercentage}%
                  </div>
                  <div className="flex h-[180px] w-[190px] items-center justify-center">
                    <img src={img} className="h-[152px] w-[172px]" />
                  </div>
                  <div className="absolute right-0 top-0 flex flex-col gap-2 p-2">
                    <i className="fa-regular fa-heart rounded-full bg-white p-2"></i>
                    <i className="fa-regular fa-eye rounded-full bg-white p-2"></i>
                  </div>
                </div>
                <div id="product-details" className="mt-2">
                  <h1 className="font-display text-base font-medium">{name}</h1>
                  <div className="flex gap-3 font-display text-base font-medium">
                    <span className="text-red-500">${discountedPrice}</span>
                    <span className="text-neutral-300">${price}</span>
                  </div>
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
        <div className="mt-6 flex items-center justify-center">
          <button className="border bg-red-600 px-4 py-2 font-display font-medium text-white">
            View All Products
          </button>
        </div>
      </div>
      <div className="mt-14 border"></div>
    </div>
  );
}
