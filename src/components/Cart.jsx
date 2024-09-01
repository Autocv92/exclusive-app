import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loader } from "./Loader";
import { CartItems } from "./CartItems";
import axios from "axios";

export function Cart() {
  const [cart, setCart] = useState([]);
  // const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function cartItems() {
      setIsLoading(true);
      // setError(false);
      const res = await axios.get("http://localhost:3000/cart");
      // const data = await res.json();
      setCart(res.data);
      console.log(cart);
      setIsLoading(false);
    }
    cartItems();
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-20 mb-36 mt-20 flex h-[750px] w-[1400px] bg-slate-200">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CartItems cart={cart} />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
