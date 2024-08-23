export function BestSellingProducts() {
  const productList = [
    {
      id: 1,
      name: "The north coat",
      img: "product5.png",
      price: 360,
      discountedPrice: 260,
      review: 65,
      rating: 5,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      img: "product6.png",
      price: 1160,
      discountedPrice: 960,
      review: 75,
      rating: 5,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      img: "product7.png",
      price: 170,
      discountedPrice: 160,
      review: 99,
      rating: 5,
    },
    {
      id: 4,
      name: "Small BookSelf",
      img: "product8.png",
      price: 360,
      review: 75,
      rating: 5,
    },
  ];
  return (
    <div className="mt-10 px-20">
      <div id="best-selling" className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-5 rounded-sm bg-red-600"></div>
            <span className="font-display font-semibold text-red-600">
              This month
            </span>
          </div>
          <h1 className="mt-2 font-body text-4xl font-semibold">
            Best Selling Products
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-sm bg-red-600 px-4 py-1 font-display font-medium text-white">
            View All
          </button>
        </div>
      </div>

      <div id="best-selling-product" className="mt-10">
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
                  {discountInPercentage && (
                    <div className="absolute left-0 top-0 m-2 rounded-md bg-red-600 px-2 py-1 text-white">
                      -{discountInPercentage}%
                    </div>
                  )}

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
                    <span className="text-red-500">
                      ${discountedPrice ? discountedPrice : price}
                    </span>
                    {discountedPrice && (
                      <span className="text-neutral-300">${price}</span>
                    )}
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
      </div>
      <div className="mt-14 border"></div>
    </div>
  );
}
