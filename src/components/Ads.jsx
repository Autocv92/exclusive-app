export function Ads() {
  return (
    <div className="mt-10 px-20">
      <div className="flex h-[500px] bg-black">
        <div id="ads-detail" className="pl-10 pt-20">
          <span className="font-display font-semibold text-green-500">
            Categories
          </span>
          <h1 className="mt-4 font-body text-5xl font-semibold text-white">
            Enhance Your Music Experience
          </h1>
          <div className="mt-10 flex gap-4">
            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="font-display font-semibold">05</span>
              <span className="font-display text-xs">Days</span>
            </div>
            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="font-display font-semibold">23</span>
              <span className="font-display text-xs">Hours</span>
            </div>
            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="font-display font-semibold">59</span>
              <span className="font-display text-xs">Minutes</span>
            </div>
            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="font-display font-semibold">35</span>
              <span className="font-display text-xs">Seconds</span>
            </div>
          </div>
          <button className="mt-10 rounded-sm bg-green-600 px-12 py-4 text-white">
            Buy Now!
          </button>
        </div>
        <div className="flex items-center justify-center px-4">
          <img src="ads.svg" />
        </div>
      </div>
    </div>
  );
}
