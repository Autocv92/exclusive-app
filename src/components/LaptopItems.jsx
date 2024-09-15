import { useProducts } from "../context/ProductsContext";

export function LaptopItems() {
  const { laptops } = useProducts();

  return (
    <div>
      <div className="mt-2">
        <h2>All Products</h2>
      </div>

      <div className="mt-10 flex h-full w-[1400] flex-wrap gap-5 bg-white">
        {laptops.map((laptopItem) => {
          const { id, name, img, price, review } = laptopItem;

          return (
            <>
              <div
                className="relative flex h-[450px] w-[300px] flex-wrap gap-[20px] border-2 bg-white"
                key={id}
              >
                <div className="absolute right-2 top-1">
                  <i className="fa fa-heart text-gray" aria-hidden="true"></i>
                </div>
                <div id="sale-product" className="h-[350px] w-[200px]">
                  <div
                    id="product-img"
                    className="relative flex h-[250px] items-center justify-center bg-white"
                  >
                    <div className="ml-4 flex w-[250px] flex-col items-center gap-2">
                      <div className="absolute right-[10px] top-[10px] z-10 rounded-md bg-white px-2 py-1 text-black"></div>
                      <div className="flex h-[300px] w-[190px] flex-col items-center justify-center rounded-md">
                        <img src={img} className="h-[300px] w-[200px]" />
                      </div>
                    </div>
                  </div>
                  <div id="product-details" className="mt-2">
                    <h1 className="font-display text-base font-medium">
                      {name}
                    </h1>
                    <span className="font-display text-base font-medium">
                      ${price}
                    </span>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="bg-green-900">
                          4.1
                          <i className="fa-regular fa-star text-amber-400"></i>
                        </div>
                        <span>(98)</span>
                      </div>
                      <span className="font-display text-sm font-medium">
                        <span> {review}</span>
                      </span>
                    </div>
                    <div className="text-black">-35%</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
