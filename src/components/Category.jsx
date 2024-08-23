export function Category() {
  const categoriesList = [
    {
      id: 1,
      name: "Phones",
      img: "phone.svg",
    },
    {
      id: 2,
      name: "Computers",
      img: "computer.svg",
    },
    {
      id: 3,
      name: "SmartWatch",
      img: "smartwatch.svg",
    },
    {
      id: 4,
      name: "Camera",
      img: "camera.svg",
      background: "red",
    },
    {
      id: 5,
      name: "HeadPhones",
      img: "headphone.svg",
    },
    {
      id: 6,
      name: "Gaming",
      img: "game.svg",
    },
  ];
  return (
    <div className="mt-10 px-20">
      <div id="browse-categories" className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-5 rounded-sm bg-red-600"></div>
            <span className="font-display font-semibold text-red-600">
              Categories
            </span>
          </div>
          <h1 className="mt-2 font-body text-4xl font-semibold">
            Browse By Category
          </h1>
        </div>
        <div className="flex gap-2">
          <i className="fa-solid fa-arrow-left rounded-full bg-neutral-100 p-4"></i>
          <i className="fa-solid fa-arrow-right rounded-full bg-neutral-100 p-4"></i>
        </div>
      </div>
      <div id="categories" className="mt-10 flex gap-8">
        {categoriesList.map(({ id, name, img }) => {
          const bgColor = id === 4 ? "bg-red-600" : "";
          return (
            <div
              key={id}
              className={`${bgColor} flex h-[145px] w-[170px] items-center justify-center border`}
            >
              <div className="flex flex-col items-center justify-center">
                <img src={img} alt="" />
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 border"></div>
    </div>
  );
}
