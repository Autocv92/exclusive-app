import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { CartItems } from "./CartItems";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function cartItems() {
      setIsLoading(true);
      // setError(false);
      const res = await axios.get("http://localhost:3000/cart");
      // const data = await res.json();
      setCart(res.data);

      setIsLoading(false);
    }
    cartItems();
  }, []);

  return (
    <div>
      <button
        className="bg-red-500 px-1 py-1 text-[16px]"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
      <div className="mx-20 mb-36 mt-20 flex h-[750px] w-[1100px] bg-slate-200">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CartItems cart={cart} />
          </>
        )}
      </div>
    </div>
  );
}
