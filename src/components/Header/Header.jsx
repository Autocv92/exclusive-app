import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const myProfileHandler = () => {
    navigate("/myprofile");
  };

  return (
    <div>
      {/* Top Header */}
      <div className="flex h-12 items-center justify-center border bg-black">
        <div className="flex w-[859px] justify-between">
          <div className="flex items-center gap-2">
            <p className="font-display text-sm text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <NavLink
              className="font-display font-semibold text-white underline"
              alt="shop now"
            >
              ShopNow
            </NavLink>
          </div>
          <div className="flex">
            <span className="font-display text-white">English</span>
            <img src="arrow.svg" />
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="relative mb-2 mt-4 flex h-9 items-center justify-between px-32">
        <NavLink to="/">
          <h1 className="font-body font-bold">Exclusive</h1>
        </NavLink>

        <ul className="flex gap-8">
          <li className="font-display">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-500 text-red-500" : "bg-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-display">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-500 text-red-500" : "bg-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li to="aboutus">
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-500 text-red-500" : "bg-white"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="font-display">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-red-500 text-red-500" : "bg-white"
              }
            >
              sign Up
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              className="rounded-full border-2 p-1 outline-none focus:border-blue-500"
              placeholder="Search ....."
            />
            <img src="search.svg" className="ml-[-40px] h-6 w-6" />
          </div>

          <NavLink
            onMouseOver={() => myProfileHandler()}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "bg-white"
            }
          >
            <i className="fa-solid fa-user mt-1 text-center text-[24px]"></i>
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "bg-white"
            }
          >
            <img src="wishlist.svg" className="h-8 w-8" />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "bg-white"
            }
          >
            <img src="cart.svg" className="h-8 w-8" />
            <span className="absolute right-[118px] top-[-8px] h-[18px] w-[18px] rounded-full bg-red-500 text-center text-[14px] text-white">
              1
            </span>
          </NavLink>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
