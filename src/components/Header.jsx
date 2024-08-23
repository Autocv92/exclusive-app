export function Header() {
  return (
    <div>
      {/* Top Header */}
      <div className="flex h-12 items-center justify-center border bg-black">
        <div className="flex w-[859px] justify-between">
          <div className="flex items-center gap-2">
            <p className="font-display text-sm text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a
              href="#"
              className="font-display font-semibold text-white underline"
              alt="shop now"
            >
              ShopNow
            </a>
          </div>
          <div className="flex">
            <span className="font-display text-white">English</span>
            <img src="arrow.svg" />
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="mb-2 mt-4 flex h-9 items-center justify-between px-32">
        <h1 className="font-body font-bold">Exclusive</h1>
        <ul className="flex gap-8">
          <li className="font-display">
            <a href="#">Home</a>
          </li>
          <li className="font-display">
            <a href="#">Contact</a>
          </li>
          <li className="font-display">
            <a href="#">About</a>
          </li>
          <li className="font-display">
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="flex gap-2 bg-neutral-100 px-2 py-1">
            <input
              type="text"
              className="bg-neutral-100 font-display text-xs"
              placeholder="What are you looking for?"
            />
            <img src="search.svg" className="h-6 w-6" />
          </div>
          <img src="wishlist.svg" className="h-8 w-8" />
          <img src="cart.svg" className="h-8 w-8" />
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
