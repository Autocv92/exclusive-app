export async function getWishlist() {
  const res = await fetch("http://localhost:3000/wishlist");
  if (!res.ok) throw Error("Faild geeting Wishlist");
  const data = await res.json();

  return data;
}
