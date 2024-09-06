// import { ProductItem } from "../ProductItem";

import { useLoaderData, useNavigate } from "react-router-dom";
import { getWishlist } from "../../apiecommerce/apiApp";
import WishlistItems from "./WishlistItems";

function Wishlist() {
  const wishlistItems = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-36 mt-20 px-20">
        <button
          className="bg-red-500 px-1 py-1 text-[16px]"
          onClick={() => navigate(-1)}
        >
          &larr; Go back
        </button>

        <div className="flex items-center justify-between">
          <div>Wishlist (4)</div>
          <button className="rounded border px-12 py-4">Move All To Bag</button>
        </div>
        <div className="mt-16 flex gap-[30px]">
          <WishlistItems wishlistItems={wishlistItems} />
        </div>
      </div>
    </div>
  );
}

// function for fatch tha data

export async function loader() {
  const wishlistItems = await getWishlist();
  return wishlistItems;
}

export default Wishlist;
