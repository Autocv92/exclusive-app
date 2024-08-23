export function OurProducts() {
  const productList = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      img: "product9.jfif",
      price: 100,
      review: 88,
      rating: 5,
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      img: "product10.png",
      price: 360,
      review: 95,
      rating: 5,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      img: "product11.png",
      price: 700,
      review: 325,
      rating: 5,
    },
    {
      id: 4,
      name: "Curology Product Set",
      img: "product12.png",
      price: 500,
      review: 145,
      rating: 5,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      img: "product13.png",
      isNewProduct: true,
      price: 700,
      review: 65,
      rating: 5,
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      img: "product14.png",
      price: 1160,
      review: 35,
      rating: 5,
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      img: "product15.png",
      isNewProduct: true,
      price: 660,
      review: 55,
      rating: 5,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      img: "product12.png",
      price: 660,
      review: 55,
      rating: 5,
    },
  ];

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
          {productList.map((product) => {
            const { id, name, img, price, isNewProduct, review } = product;

            return (
              <div id="sale-product" key={id} className="h-[350px] w-[270px]">
                <div
                  id="product-img"
                  className="relative flex h-[250px] items-center justify-center bg-neutral-100"
                >
                  {isNewProduct && (
                    <div className="absolute left-0 top-0 m-2 rounded-md bg-green-400 px-2 py-1 text-white">
                      New
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
