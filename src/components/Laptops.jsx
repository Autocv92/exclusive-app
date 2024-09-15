import { Link } from "react-router-dom";
import { LaptopItems } from "./LaptopItems";
import { useProducts } from "../context/ProductsContext";

export function Laptops() {
  const { laptops, isExpanded, onToggle } = useProducts();

  return (
    <div className="flex h-full w-full gap-5 bg-slate-100">
      {/* left */}

      <div className="flex h-screen w-[400px]">
        <div className="ml-5 flex h-screen w-[350px] flex-col gap-5 bg-white">
          <div className="">
            <div className="flex h-[50px] items-center justify-center border-b-2">
              <span className="w-[250px]">Fitlters</span>
              <span className="w-[100px] text-center">CLEAR ALL</span>
            </div>
          </div>

          <div className="flex h-[50px] items-center border-b-2">
            <div className="flex items-center justify-center gap-7 px-4">
              <span className="w-[250px] font-display font-semibold">
                CATRGORIES
              </span>
              <i className="fa-solid fa-angle-down w-[50px] cursor-pointer text-center text-gray-400"></i>
            </div>
          </div>

          <div
            className={`translate-all overflow-hidden border-b-2 duration-300 ${isExpanded ? "h-[220px]" : "h-[50px]"}`}
          >
            <div className="flex items-center gap-7 px-4" key={laptops.id}>
              <span className="w-[250px] font-display font-semibold">
                BRANDS
              </span>
              <i
                className={`fa-solid fa-angle-down w-[50px] cursor-pointer text-center text-gray-400 ${isExpanded ? "rotate-90" : ""}`}
                onClick={() => onToggle(laptops.id)}
              ></i>
            </div>
            <div
              className={`overflow-hidden px-4 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
            >
              <ul key={laptops.id}>
                {laptops.map((laptop) => {
                  const { brand, id } = laptop;
                  return (
                    <>
                      <li className="flex" key={id}>
                        <Link>
                          <input type="checkbox" />
                          <span className="ml-2">{brand}</span>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`translate-all overflow-hidden border-b-2 duration-300 ${isExpanded ? "h-[220px]" : "h-[50px]"}`}
          >
            <div className="flex items-center gap-7 px-4">
              <span className="w-[250px] font-display font-semibold">RAM</span>
              <i
                className={`fa-solid fa-angle-down w-[50px] cursor-pointer text-center text-gray-400 ${isExpanded ? "rotate-90" : ""}`}
                onClick={() => onToggle(laptops.id)}
              ></i>
            </div>
            <div
              className={`overflow-hidden px-4 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
            >
              <ul>
                {laptops.map((laptop) => {
                  const { ram, id } = laptop;

                  return (
                    <>
                      <li className="flex" key={id}>
                        <Link>
                          <input type="checkbox" />
                          <span className="ml-2">{ram}</span>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`translate-all overflow-hidden border-b-2 duration-300 ${isExpanded ? "h-[220px]" : "h-[50px]"}`}
          >
            <div className="flex items-center gap-7 px-4">
              <span className="w-[250px] font-display font-semibold">
                PROCESSOR GENERATION
              </span>
              <i
                className={`fa-solid fa-angle-down w-[50px] cursor-pointer text-center text-gray-400 ${isExpanded ? "rotate-90" : ""}`}
                onClick={() => onToggle(laptops.id)}
              ></i>
            </div>
            <div
              className={`overflow-hidden px-4 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
            >
              <ul>
                {laptops.map((laptop) => {
                  const { processor, id } = laptop;
                  return (
                    <>
                      <li className="flex" key={id}>
                        <Link>
                          <input type="checkbox" />
                          <span className="ml-2">{processor}</span>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="h-full w-[1400px]">
        <LaptopItems />
      </div>
    </div>
  );
}
