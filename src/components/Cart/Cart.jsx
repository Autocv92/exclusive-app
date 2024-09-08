import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-red-500 px-1 py-1 text-[16px]"
        onClick={() => navigate("/")}
      >
        &larr; Go back
      </button>
      <div className="mx-20 mb-36 mt-20 flex h-[750px] w-[1100px] bg-slate-200">
        <CartItems />
      </div>
    </div>
  );
}
