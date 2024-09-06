import PropTypes from "prop-types";

export function ProductItem({
  id,
  name,
  discountInPercentage,
  img,
  discountedPrice,
  price,
  review,
  isWishlistProduct,
}) {
  return (
    <div
      id="sale-product"
      key={id}
      className="h-[350px] w-[270px] bg-slate-500"
    >
      <div
        id="product-img"
        className="relative flex h-[250px] items-center justify-center bg-neutral-100"
      >
        {discountInPercentage && (
          <div className="absolute left-0 top-0 m-2 rounded-md bg-red-600 px-2 py-1 text-white">
            -{discountInPercentage}%
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="flex h-[180px] w-[190px] flex-col items-center justify-center">
            <img src={img} className="h-full w-full object-cover" />
          </div>
          <button className="flex h-[41px] w-full items-center justify-center gap-1 bg-black px-20 py-2 text-white">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="w-[270px] font-display text-xs">Add To Cart</span>
          </button>
        </div>

        <div className="absolute right-0 top-0 flex flex-col gap-2 p-2">
          {!isWishlistProduct ? (
            <>
              <i className="fa-regular fa-heart rounded-full bg-white p-2"></i>
              <i className="fa-regular fa-eye rounded-full bg-white p-2"></i>
            </>
          ) : (
            <i className="fa-solid fa-trash-can rounded-full bg-white p-2"></i>
          )}
        </div>
      </div>
      <div id="product-details" className="mt-2">
        <h1 className="font-display text-base font-medium">{name}</h1>
        <div className="flex gap-3 font-display text-base font-medium">
          <span className="text-red-500">
            ${discountedPrice ? discountedPrice : price}
          </span>
          {discountedPrice && (
            <span className="text-neutral-300">${price}</span>
          )}
        </div>
        {review && (
          <div className="mt-2 flex items-center gap-2">
            <ul className="flex gap-1">
              <li>
                <i className="fa-regular fa-star text-amber-400"></i>
              </li>
              <li>
                <i className="fa-regular fa-star text-amber-400"></i>
              </li>
              <li>
                <i className="fa-regular fa-star"></i>
              </li>
              <li>
                <i className="fa-regular fa-star"></i>
              </li>
              <li>
                <i className="fa-regular fa-star"></i>
              </li>
            </ul>
            <span className="font-display text-sm font-medium text-neutral-300">
              ({review})
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isWishlistProduct: PropTypes.bool,
  discountInPercentage: PropTypes.number,
  img: PropTypes.string.isRequired,
  discountedPrice: PropTypes.number,
  price: PropTypes.number,
  review: PropTypes.number,
};
