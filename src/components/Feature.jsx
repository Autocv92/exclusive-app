export function Feature() {
  return (
    <div className="my-10 flex justify-center gap-10">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-400">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <i className="fa-solid fa-truck text-white"></i>
            </div>
          </div>
          <p className="font-display text-xl font-semibold">
            FREE AND FAST DELIVERY
          </p>
          <p className="font-display text-sm font-normal">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-400">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <i className="fa-solid fa-phone-volume text-white"></i>
            </div>
          </div>
          <p className="font-display text-xl font-semibold">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="font-display text-sm font-normal">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-400">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <i className="fa-regular fa-square-check text-white"></i>
            </div>
          </div>
          <p className="font-display text-xl font-semibold">
            MONEY BACK GUARANTEE
          </p>
          <p className="font-display text-sm font-normal">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
