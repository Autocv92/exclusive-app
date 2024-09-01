export function CartItems({ cart }) {
  console.log(cart);
  return (
    <div>
      <div className="mx-[10px] mb-[10px] mt-[10px] flex h-[630px] w-[900px] flex-col">
        <div className="mb-5 flex h-[100px] w-[900px] items-center justify-around rounded-md bg-white shadow-md">
          <p>From Save Address</p>
          <span>Enter Delivery PinCode</span>
        </div>
        <div className="flex max-h-[1000px] w-[900px] flex-col items-center justify-center">
          <div className="flex flex-col gap-0">
            {cart.map((item) => {
              const { id, name, img, price } = item;

              return (
                <div id="sale-product" key={id} className="w-[900px]">
                  <div className="border bg-white">
                    <div className="flex items-center justify-around">
                      <img
                        src={img}
                        alt="cart-product"
                        className="h-[80px] w-[80px]"
                      />
                      <div>
                        <span>{name}</span>
                        <span>${price}</span>
                      </div>
                      <div>
                        <h2>Delivery By Saturday Aug 31 | Free</h2>
                      </div>
                    </div>
                    <div className="flex items-center justify-around">
                      <div className="flex gap-4">
                        <button className="h-[24px] w-[24px] rounded-md bg-slate-400">
                          -
                        </button>
                        <input
                          type="text"
                          className="h-[24px] w-[24px] bg-slate-300"
                        />
                        <button className="h-[24px] w-[24px] rounded-md bg-slate-400">
                          +
                        </button>
                      </div>
                      <div className="text-green-500">SAVE FOR LATER</div>
                      <div>
                        <span className="text-red-500">REMOVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex h-[100px] w-[900px] items-center justify-around bg-white shadow-md">
          <span className="rounded-lg bg-red-400 p-3">PLACE ORDER</span>
        </div>
      </div>

      <div className="mx-[10px] mb-[10px] mt-[10px] flex h-[630px] w-[400px] flex-col">
        <div className="text-[]18px] flex h-[60px] w-[400px] items-center justify-center border bg-white font-sans shadow-md">
          <span>PRICE DETAILS</span>
        </div>

        <div className="white flex h-[300px] w-[400px] flex-col border bg-white font-sans text-[18px]">
          <div className="flex h-[50px] w-[400] items-center justify-around">
            <span>Price(1 item)</span>
            <span>$2,345</span>
          </div>

          <div className="flex h-[50px] w-[400] items-center justify-around">
            <span>Discount</span>
            <span>$345</span>
          </div>
          <div className="flex h-[50px] w-[400] items-center justify-around">
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>
          <div className="flex h-[50px] w-[400] items-center justify-around border-b-2 border-t-2 font-bold">
            <span>Total Amount</span>
            <span>$2000</span>
          </div>
          <div className="flex h-[50px] w-[400] items-center justify-around">
            <span className="text-[18px] font-bold text-green-400">
              You Will save $345 on this order{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
