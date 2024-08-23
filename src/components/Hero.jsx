export function Hero() {
  return (
    <div className="flex px-20">
      <div className="flex w-[250px] gap-4">
        <ul className="pt-4 font-display">
          <li className="p-2 pl-0">
            <a href="#"> Woman’s Fashion</a>
            <i className="fa-solid fa-greater-than ml-2 h-6 w-6"></i>
          </li>
          <li className="p-2 pl-0">
            <a href="#"> Men’s Fashion</a>
            <i className="fa-solid fa-greater-than ml-2 h-6 w-6"></i>
          </li>
          <li className="p-2 pl-0">
            <a href="#"> Electronics</a>
          </li>
          <li className="p-2 pl-0">
            <a href="#">Home & Lifestyle</a>
          </li>
          <li className="p-2 pl-0">
            <a href="#">Medicine</a>
          </li>
          <li className="p-2 pl-0">
            <a href="#">Sports & Outdoor</a>
          </li>
          <li className="p-2 pl-0">
            <a href="#">Groceries & Pets</a>
          </li>
          <li className="p-2 pl-0">
            <a href="#">Health & Beauty</a>
          </li>
        </ul>
        <div className="border-r-2"></div>
      </div>
      <div className="ml-4 mt-4 gap-8 bg-black">
        <div className="flex">
          <div className="m-10 text-white">
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-apple"></i>
              <span>iPhone 14 Series </span>
            </div>
            <h1 className="mt-6 text-5xl font-semibold">
              Up to 10% off Voucher
            </h1>
            <div className="mt-6 flex items-center gap-2">
              <a href="Shop Now" className="font-display font-medium underline">
                Shop Now
              </a>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div>
            <img src="iphone.jfif" className="h-[352px] w-[496px]" />
          </div>
        </div>
        <ul className="mb-4 flex items-center justify-center gap-2">
          <li className="h-2 w-2 rounded border"></li>
          <li className="h-2 w-2 rounded border"></li>
          <li className="h-2 w-2 rounded border bg-red-800"></li>
          <li className="h-2 w-2 rounded border"></li>
          <li className="h-2 w-2 rounded border"></li>
        </ul>
      </div>
    </div>
  );
}
