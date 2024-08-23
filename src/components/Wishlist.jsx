import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductItem } from "./ProductItem";

const wishlistProducts = [
  {
    id: 1,
    name: "Gucci duffle bag",
    img: "product6.png",
    price: 1160,
    discountInPercentage: 35,
    discountedPrice: 960,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    img: "product7.png",
    price: 1960,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    img: "product1.png",
    price: 550,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    img: "product16.png",
    price: 750,
  },
];

const productList = [
  {
    id: 1,
    name: "The north coat",
    img: "product5.png",
    price: 360,
    discountedPrice: 260,
    review: 65,
    rating: 5,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    img: "product6.png",
    price: 1160,
    discountedPrice: 960,
    review: 75,
    rating: 5,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    img: "product7.png",
    price: 170,
    discountedPrice: 160,
    review: 99,
    rating: 5,
  },
  {
    id: 4,
    name: "Small BookSelf",
    img: "product8.png",
    price: 360,
    review: 75,
    rating: 5,
  },
];

export function Wishlist() {
  return (
    <div>
      <Header />
      <div className="mb-36 mt-20 px-20">
        <div className="flex items-center justify-between">
          <div>Wishlist (4)</div>
          <button className="rounded border px-12 py-4">Move All To Bag</button>
        </div>
        <div className="mt-16 flex gap-[30px]">
          {wishlistProducts?.map((product) => {
            const {
              id,
              name,
              img,
              price,
              discountInPercentage,
              discountedPrice,
            } = product;
            return (
              <ProductItem
                key={id}
                id={id}
                name={name}
                img={img}
                price={price}
                discountInPercentage={discountInPercentage}
                discountedPrice={discountedPrice}
                isWishlistProduct={true}
              />
            );
          })}
        </div>

        <div id="just-for-you" className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-5 rounded-sm bg-red-600"></div>
              <span className="font-display font-semibold text-red-600">
                Just For You
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-sm border px-12 py-4 font-display font-medium">
              See All
            </button>
          </div>
        </div>

        <div id="best-selling-product" className="mt-10">
          <div className="flex gap-8">
            {productList.map((product) => {
              const {
                id,
                name,
                img,
                price,
                discountInPercentage,
                discountedPrice,
                review,
                rating,
              } = product;

              return (
                <ProductItem
                  key={id}
                  id={id}
                  name={name}
                  img={img}
                  price={price}
                  discountInPercentage={discountInPercentage}
                  discountedPrice={discountedPrice}
                  isWishlistProduct={true}
                  review={review}
                  rating={rating}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
