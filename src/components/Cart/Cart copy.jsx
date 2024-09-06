export function Cart() {
  return (
    <div>
      <div className="mx-20 mb-36 mt-20 border">
        <div id="price-details" className="flex flex-col gap-10">
          <div className="flex h-[72px] items-center justify-between rounded border px-10 shadow">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <div className="flex h-[102px] items-center justify-between rounded border px-10 shadow">
            <span>LCD Monitor</span>
            <span>$650</span>
            <span>01</span>
            <span>$650</span>
          </div>
          <div className="flex h-[102px] items-center justify-between rounded border px-10 shadow">
            <span>LCD Monitor</span>
            <span>$650</span>
            <span>01</span>
            <span>$650</span>
          </div>
        </div>
        <div id="cart-details" className="mt-20">
          Coupon & Cart Total
        </div>
      </div>
    </div>
  );
}
