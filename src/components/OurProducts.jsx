import { OurProductsList } from "./OurProductsList.jsx";

export function OurProducts() {
  return (
    <div className="mt-20 px-20">
      <>
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
          <div>
            <OurProductsList />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button className="border bg-red-600 px-4 py-2 font-display font-medium text-white">
              View All Products
            </button>
          </div>
        </div>
      </>

      {/* {error && <ErrorMessage message={error} />} */}
    </div>
  );
}
