import { Footer } from "./Footer";
import { Header } from "./Header";

export function AboutUs() {
  return (
    <div className="h-full">
      <Header />
      {/*  */}

      <div className="mb-[50px] mt-[50px] flex h-[609px] w-full justify-between">
        <div className="ml-5 flex h-[609px] w-[512px] flex-col justify-center bg-white">
          <h1 className="font-inter mb-[20px] text-left font-body text-5xl text-[32px] font-[700] leading-[30px] text-black">
            Our Story
          </h1>
          <p className="font-poppins text-left text-[16px] leading-[24px] text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
            quaerat dignissimos accusamus magni harum, ad veritatis, sed vero
            odio exercitationem illum nesciunt unde provident eligendi excepturi
            cupiditate aspernatur quisquam.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            explicabo consequuntur dolores quidem tempore, soluta officia magnam
            doloribus fugiat debitis id quia odio, fugit repellendus,
            consectetur nesciunt praesentium ullam.
          </p>
        </div>
        <div className="">
          <img
            src="shoppingbag.png"
            alt="story"
            className="h-[609px] w-[705px]"
          />
        </div>
      </div>

      {/* 1 */}

      <div className="flex h-[230px] w-full items-center justify-center gap-[30px]">
        <div className="h-[230px] w-[270px] rounded-[4px] border border-gray-300 bg-white">
          <div className="ml-[50px] mt-[30px] flex h-[170px] w-[170px] flex-col items-center justify-between gap-[12px]">
            <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
              <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
                <i className="fa-solid fa-house flex items-center justify-center text-[24px] text-white"></i>
              </div>
            </div>
            <div className="dap-px flex h-[66px] w-[169px] flex-col items-center justify-center gap-[12px]">
              <div className="h-[30px]">
                <h2 className="font-inter text-[32px] font-[700] leading-[30px]">
                  10.5k
                </h2>
              </div>

              <p className="font-poppins line-clamp-1 text-center text-[16px] leading-[24px] text-black">
                Saller active our site
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}

        <div className="h-[230px] w-[270px] rounded-[4px] border border-gray-300 bg-red-500">
          <div className="ml-[50px] mt-[30px] flex h-[170px] w-[169px] flex-col items-center justify-between gap-[12px]">
            <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
              <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
                <i className="fa-thin fa-dollar-sign flex items-center justify-center text-[24px] text-white"></i>
              </div>
            </div>
            <div className="dap-px flex h-[66px] w-[200px] flex-col items-center justify-center gap-[12px]">
              <div className="h-[30px]">
                <h2 className="font-inter text-[32px] font-[700] leading-[30px]">
                  33k
                </h2>
              </div>

              <p className="font-poppins line-clamp-1 text-center text-[16px] leading-[24px] text-black">
                Monthly production sale
              </p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="h-[230px] w-[270px] rounded-[4px] border border-gray-300 bg-white">
          <div className="ml-[50px] mt-[30px] flex h-[170px] w-[169px] flex-col items-center justify-between gap-[12px]">
            <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
              <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
                <i className="fa-solid fa-gift flex items-center justify-center text-[24px] text-white"></i>
              </div>
            </div>
            <div className="dap-px flex h-[66px] w-[200px] flex-col items-center justify-center gap-[12px]">
              <div className="h-[30px]">
                <h2 className="font-inter text-[32px] font-[700] leading-[30px]">
                  45.5k
                </h2>
              </div>

              <p className="font-poppins line-clamp-1 text-center text-[16px] leading-[24px] text-[400] text-black">
                Customer active our site
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div className="h-[230px] w-[270px] rounded-[4px] border border-gray-300 bg-white">
          <div className="-gray-400 ml-[50px] mt-[30px] flex h-[170px] w-[200px] flex-col items-center justify-between gap-[12px]">
            <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
              <div className="-gray-400 flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
                <i className="fa-solid fa-sack-dollar flex items-center justify-center text-[24px] text-white"></i>
              </div>
            </div>
            <div className="dap-px -gray-400 flex h-[66px] flex-col items-center justify-center gap-[12px]">
              <div className="h-[30px]">
                <h2 className="font-inter text-[32px] font-[700] leading-[30px]">
                  25k
                </h2>
              </div>

              <p className="font-poppins text-center text-[16px] font-[400] leading-[24px] text-black">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="mb-[80px] mt-[80px] flex w-full flex-col items-center justify-between gap-[30px]">
        <div className="flex justify-center gap-[60px]">
          <div className="flex w-[350px] flex-col">
            <div className="flex items-center justify-center bg-gray-200">
              <img
                src="team1.png"
                alt="team-photo"
                className="h-[397px] w-[294px]"
              />
            </div>

            <div className="flex flex-col justify-start">
              <div>
                <h1 className="text-[20px] font-bold text-black">
                  Emma Wastson
                </h1>
                <p className="font-poppins text-[16px] font-[400] leading-[24px] text-black">
                  Product Engineer
                </p>
              </div>
              <div className="mt-2 flex gap-2 text-[24px]">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>

          <div className="flex w-[350px] flex-col">
            <div className="flex items-center justify-center bg-gray-200">
              <img
                src="team2.png"
                alt="team-photo"
                className="h-[397px] w-[294px]"
              />
            </div>

            <div className="flex flex-col justify-start">
              <div>
                <h1 className="text-[20px] font-bold text-black">
                  Emma Wastson
                </h1>
                <p className="font-poppins text-[16px] font-[400] leading-[24px] text-black">
                  Product Engineer
                </p>
              </div>
              <div className="mt-2 flex gap-2 text-[24px]">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>

          <div className="flex w-[350px] flex-col">
            <div className="flex items-center justify-center bg-gray-200">
              <img
                src="team3.png"
                alt="team-photo"
                className="h-[397px] w-[294px]"
              />
            </div>

            <div className="flex flex-col justify-start">
              <div>
                <h1 className="text-[20px] font-bold text-black">
                  Emma Wastson
                </h1>
                <p className="font-poppins text-[16px] font-[400] leading-[24px] text-black">
                  Product Engineer
                </p>
              </div>
              <div className="mt-2 flex gap-2 text-[24px]">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-6 flex items-center justify-center gap-3">
          <div className="h-[10px] w-[10px] rounded-full bg-red-400"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-red-400"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-red-400"></div>
        </div>
      </div>

      <div className="mb-10 mt-10 flex justify-center gap-[30px]">
        <div className="mb-4 flex flex-col items-center justify-center text-center">
          <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
            <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
              <i className="fa-thin fa-dollar-sign flex items-center justify-center text-[24px] text-white"></i>
            </div>
          </div>

          <span className="text-[18px] font-bold text-black">
            FREE AND FAST DELIVERY
          </span>
          <p className="font-poppins text-center text-[16px] font-[400] leading-[24px] text-black">
            Free delivery for all orders over $100
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center text-center">
          <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
            <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
              <i className="fa-thin fa-dollar-sign flex items-center justify-center text-[24px] text-white"></i>
            </div>
          </div>

          <span className="text-[18px] font-bold text-black">
            24/7 CUSTOMER SERVICE
          </span>
          <p className="font-poppins text-center text-[16px] font-[400] leading-[24px] text-black">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center text-center">
          <div className="mt-[14px] flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-300">
            <div className="flex h-[40px] w-[40px] justify-center rounded-full bg-black text-center">
              <i className="fa-thin fa-dollar-sign flex items-center justify-center text-[24px] text-white"></i>
            </div>
          </div>

          <span className="text-[18px] font-bold text-black">
            MONEY BACK GUARANTEE
          </span>
          <p className="font-poppins text-center text-[16px] font-[400] leading-[24px] text-black">
            we return money within 30days
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
