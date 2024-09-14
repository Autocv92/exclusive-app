export function ProductDetails() {
  return (
    <div className="m-[70px] flex h-[600px] w-[1400px] gap-[50px]">
      <div className="flex w-[600px] flex-col gap-[20px]">
        <div className="h-[400px] w-[430px] hover:-translate-y-1 hover:scale-110">
          <img
            src="public\product6.png"
            alt="product-details"
            className="h-[400px] w-[450px] border-2"
          />
        </div>

        <div className="flex h-[250px] flex-row gap-[10px]">
          <div className="h-[200px] w-[100px] hover:-translate-y-1 hover:scale-110">
            <img
              src="public\product6.png"
              alt="product-details"
              className="h-[100px] w-[100px] border-2"
            />
          </div>
          <div className="h-[200px] w-[100px] hover:-translate-y-1 hover:scale-110">
            <img
              src="public\product6.png"
              alt="product-details"
              className="h-[100px] w-[100px] border-2"
            />
          </div>
          <div className="h-[200px] w-[100px] hover:-translate-y-1 hover:scale-110">
            <img
              src="public\product6.png"
              alt="product-details"
              className="h-[100px] w-[100px] border-2"
            />
          </div>
          <div className="h-[200px] w-[100px] hover:-translate-y-1 hover:scale-110">
            <img
              src="public\product6.png"
              alt="product-details"
              className="h-[100px] w-[100px] border-2"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[500px] flex-col gap-[30px] rounded-md">
        <div className="mt-[40px] flex flex-col gap-2">
          <div className="text-[18px] font-semibold">
            <span>Guchhi</span>
          </div>
          <div className="font-sans text-[32px] font-semibold">
            <span>Fall Limited Edition bag</span>
          </div>
          <div className="line-clamp-3 text-[16px]">
            <p className="font-display font-sans text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illum dignissimos commodi praesentium dolores accusamus
              nemo, incidunt.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex h-[30px] w-[150px] items-center gap-4">
            <span className="text-[22px] font-bold">$150.00</span>
            <span className="rounded-md bg-red-200 p-1 text-[16px] font-bold text-red-600">
              25%
            </span>
          </div>
          <div className="text-[14px] font-semibold text-gray-400">
            <span className="line-through">$200.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <span className="mr-2 h-[28px] w-[28px]">Color-</span>
          <spam className="h-[28px] w-[28px] rounded-full border-2 bg-green-800"></spam>
          <spam className="bd-gree h-[28px] w-[28px] rounded-full border-2 bg-red-700"></spam>
          <spam className="bd-gree h-[28px] w-[28px] rounded-full border-2 bg-pink-400"></spam>
        </div>

        <div className="flex items-center gap-4 font-semibold">
          <span className="mr-2 h-[28px] w-[28px]">Size-</span>
          <spam className="h-[28px] w-[28px] border-2 text-center">S</spam>
          <spam className="h-[28px] w-[28px] border-2 text-center">M</spam>
          <spam className="h-[28px] w-[28px] border-2 text-center">L</spam>
        </div>
        <div className="flex w-[500px] justify-around gap-[50px]">
          <div className="flex w-[200px] items-center justify-around bg-slate-200 px-2 py-2 font-semibold">
            <span className="h-[28px] w-[28px]">-</span>
            <span className="h-[28px] w-[28px] text-[18px]">1</span>
            <span className="h-[28px] w-[28px] text-[18px]">+</span>
          </div>
          <div className="flex w-[200px] items-center justify-center rounded-sm bg-[#fb641b] px-2 py-2">
            <button className="text-center text-[22px] font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
