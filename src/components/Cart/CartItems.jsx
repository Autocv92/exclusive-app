/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function CartItems() {
  const { cart, deleteHandler, incrementHandler, decrementHandler, quantity } =
    useCart();
  console.log(quantity);
  console.log(cart);

  const navigate = useNavigate();
  const totalCartPrice = cart.reduce(function (total, curr) {
    return total + curr.price;
  }, 0);

  // const a = cart.map((cartPrice) => console.log(cartPrice.price));
  // console.log(a);

  return (
    <div className="flex h-[full] w-[1000px]">
      <div className="mx-[10px] mb-[10px] mt-[10px] flex h-[630px] w-[700px] flex-col">
        <div className="mb-5 flex h-[100px] w-[700px] items-center justify-around rounded-md bg-white shadow-md">
          <p>From Save Address</p>
          <span>Enter Delivery PinCode</span>
        </div>
        <div className="flex max-h-[1000px] w-[700px] flex-col items-center justify-center">
          <div className="flex flex-col gap-0" key={cart.id}>
            {cart.map((item) => {
              const { id, name, img, price, quantity } = item;
              return (
                <div id="sale-product" key={id} className="w-[700px]">
                  <div className="border bg-white">
                    <div className="flex items-center justify-around">
                      <img
                        src={img}
                        alt="cart-product"
                        className="h-[60px] w-[60px] rounded-md"
                      />

                      <span>{name}</span>
                      <br></br>
                      <span>${price * quantity}</span>

                      <div className="flex items-center justify-center gap-4">
                        <button
                          className="h-[24px] w-[24px] rounded-md bg-slate-400 text-center"
                          onClick={() => decrementHandler(id)}
                        >
                          -
                        </button>
                        <div className="h-[24px] w-[24px] bg-slate-300 text-center">
                          {quantity}
                        </div>
                        <button
                          className="h-[24px] w-[24px] rounded-md bg-slate-400 text-center"
                          onClick={() => incrementHandler(id)}
                        >
                          +
                        </button>
                      </div>

                      <div>
                        <span
                          className="text-red-500"
                          onClick={() => deleteHandler(id)}
                        >
                          <i
                            className="fa fa-trash h-[18px] w-[24px] text-[24px]"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex h-[100px] w-[700px] items-center justify-around bg-white shadow-md">
          <span
            className="rounded-lg bg-red-400 p-3"
            onClick={() => navigate("/order")}
          >
            {cart.length < 1 ? "Add To Cart" : "Place Order"}
          </span>
        </div>
      </div>

      {/*TototPrice  */}

      {totalCartPrice > 0 ? (
        <div className="mx-[10px] mb-[10px] mt-[10px] flex h-[630px] w-[300px] flex-col">
          <div className="text-[]18px] flex h-[60px] w-[300px] items-center justify-center border bg-white font-sans shadow-md">
            <span className="font-display font-bold">PRICE DETAILS</span>
          </div>

          <div className="white flex h-[300px] w-[300px] flex-col border bg-white font-sans text-[18px]">
            <div className="flex h-[50px] w-[300] items-center justify-around">
              <span>
                Price {cart.length}({cart.length > 1 ? "items" : "item"})
              </span>

              <span>{totalCartPrice}</span>
            </div>

            <div className="flex h-[50px] w-[300] items-center justify-around">
              <span>Discount</span>
              <span>${(totalCartPrice / 100) * 10}</span>
            </div>
            <div className="flex h-[50px] w-[300] items-center justify-around">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>
            <div className="flex h-[50px] w-[300] items-center justify-around border-b-2 border-t-2 font-bold">
              <span>Total Amount</span>
              <span>{totalCartPrice - 20}</span>
            </div>
            <div className="flex h-[50px] w-[300] items-center justify-around">
              <span className="text-[18px] font-bold text-green-400">
                You Will save $345 on this order{" "}
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
