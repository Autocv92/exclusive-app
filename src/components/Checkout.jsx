import { Footer } from "./Footer";
import { Header } from "./Header";

export function Checkout() {
  return (
    <div className="">
      <Header />
      <div className="mx-20 mb-36 mt-20">
        <h1 className="font-body text-3xl font-semibold">Billing Details</h1>
        <div className="flex gap-[173px]">
          <div className="mt-12 w-[470px]">
            <div className="mb-8">
              <label className="mb-2 block font-display" htmlFor="fname">
                First Name *
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="fname"
                id="fname"
              />
            </div>
            <div className="mb-8">
              <label className="mb-2 block font-display" htmlFor="cname">
                Company Name *
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="cname"
                id="cname"
              />
            </div>
            <div className="mb-8">
              <label className="mb-2 block font-display" htmlFor="saddress">
                Street Address *
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="saddress"
                id="saddress"
              />
            </div>
            <div className="mb-8">
              <label className="mb-2 block font-display" htmlFor="aptAddress">
                Apartment, floor, etc. (optional)
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="aptAddress"
                id="aptAddress"
              />
            </div>
            <div className="mb-8">
              <label
                className="mb-2 block font-display text-base"
                htmlFor="city"
              >
                Town/City*
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="mb-8">
              <label
                className="mb-2 block font-display text-base"
                htmlFor="phone"
              >
                Phone Number*
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <div className="mb-8">
              <label
                className="mb-2 block font-display text-base"
                htmlFor="email"
              >
                Email Address*
              </label>
              <input
                className="h-12 w-full rounded border bg-neutral-100 focus:border-gray-400 focus:outline-none"
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-8 flex">
              <input type="checkbox" className="gap-2" />
              <div className="p-2">
                Save this information for faster checkout next time
              </div>
            </div>
          </div>
          <div className="mt-12 w-[527px]">
            <div id="product-list" className="flex flex-col gap-8">
              <div className="flex gap-6 pr-[102px]">
                <div id="image" className="h-14 w-14">
                  <img
                    src="product1.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-auto flex-1 items-center justify-between py-[15px]">
                  <div>LCD Monitor</div>
                  <div>$560</div>
                </div>
              </div>
              <div className="flex gap-6 pr-[102px]">
                <div id="image" className="h-14 w-14">
                  <img
                    src="product1.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-auto flex-1 items-center justify-between py-[15px]">
                  <div>LCD Monitor</div>
                  <div>$560</div>
                </div>
              </div>
            </div>
            <div id="billing-details" className="mt-8 pr-[102px]">
              <div>
                <div className="flex justify-between border-b-2 pb-4">
                  <div>Subtotal:</div>
                  <div>$1750</div>
                </div>
                <div className="flex justify-between border-b-2 py-4">
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>Total:</div>
                <div>$1750</div>
              </div>
            </div>
            <div className="mt-8 flex justify-between pr-[102px]">
              <div className="flex gap-4">
                <input type="radio" />
                <div>Bank</div>
              </div>
              <div className="flex h-7 gap-2">
                <img
                  src="card1.png"
                  alt="card 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="card2.png"
                  alt="card 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="card3.png"
                  alt="card 3"
                  className="h-full w-full object-cover"
                />
                <img
                  src="card4.png"
                  alt="card 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              <input type="radio" />
              <div>Cash on delivery</div>
            </div>
            <div className="mt-8 flex gap-4">
              <input
                type="text"
                className="rounded-sm border px-12 py-4 focus:border-gray-400 focus:outline-none"
                placeholder="Coupon Code"
              />
              <button className="bg-red-600 px-12 py-4 text-white">
                Apply Coupon
              </button>
            </div>
            <button className="mt-8 bg-red-600 px-12 py-4 text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
