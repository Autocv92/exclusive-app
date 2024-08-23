export function NewArrival() {
  return (
    <div className="mt-10 px-20">
      <div className="flex items-center gap-4">
        <div className="h-10 w-5 rounded-sm bg-red-600"></div>
        <span className="font-display font-semibold text-red-600">
          Featured
        </span>
      </div>
      <h1 className="mt-4 font-body text-4xl font-semibold">New Arrival</h1>
      <div className="mt-10 flex h-auto gap-10 border">
        <div className="relative w-[570px] bg-black">
          <img src="new-arrival1.png" />
          <div className="absolute bottom-0 left-0 w-[242px] p-4 text-white">
            <h1 className="font-body text-2xl font-semibold">PlayStation 5</h1>
            <p className="my-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a className="font-display font-medium underline">Shop Now</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative bg-black">
            <img src="new-arrival2.svg" className="ml-60" />
            <div className="absolute bottom-0 left-0 w-[280px] p-4 text-white">
              <h1 className="font-body text-2xl font-semibold">
                Women’s Collections
              </h1>
              <p className="my-4">
                Featured woman collections that give you another vibe.
              </p>
              <a className="font-display font-medium underline">Shop Now</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative flex h-[284px] w-[326px] items-center justify-center bg-black">
              <img src="new-arrival3.png" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h1 className="font-body text-2xl font-semibold">Speakers</h1>
                <p className="my-2">Amazon wireless speakers</p>
                <a className="font-display font-medium underline">Shop Now</a>
              </div>
            </div>
            <div className="relative flex h-[284px] w-[326px] items-center justify-center bg-black">
              <img src="new-arrival4.png" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h1 className="font-body text-2xl font-semibold">Perfume</h1>
                <p className="my-2">GUCCI INTENSE OUD EDP</p>
                <a className="font-display font-medium underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
