export function Contact() {
  return (
    <div>
      <div className="mb-[50px] mt-[50px] flex gap-[32px]">
        {/* left */}
        <div className="ml-[135px] h-[457] w-[340px] rounded-[4px] border-[2px] bg-white">
          <div className="ml-[35px] mt-[40] flex h-[366px] w-[270px] flex-col gap-[24px]">
            {/* top */}
            <div className="mt-[40px] h-[180px] w-[250px] border-b-[1.5px]">
              <div className="flex h-[40px] w-[147px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500">
                  <i className="fa-solid fa-phone text-[14px] font-bold text-white"></i>
                </div>
                <span className="ml-[10px] font-bold">Call to US</span>
              </div>
              <div className="poppins text-[14px] font-[400] leading-6">
                <p>We are available 24/7,7 days a week</p>
                <span>Phon: +8430268208</span>
              </div>
            </div>

            {/* bottom */}
            <div className="flex h-[180px] w-[250px] flex-col">
              <div className="flex h-[40px] w-[147px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500">
                  <i className="fa-solid fa-envelope text-[14px] text-white"></i>
                </div>
                <span className="ml-[10px] font-bold">Write to US</span>
              </div>

              <div className="poppins text-[14px] font-[400]">
                <p>
                  Find out our form and we will contact you within 24 hours .
                </p>
              </div>
              <div className="poppins mt-[5px] h-[116px] w-[250px] text-[14px] font-[400] leading-6">
                <p>Email: customer@exclusive.com </p>

                <p>Email: customer@exclusive.com </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="flex h-[457px] w-[800px] rounded-[4px] border-[2px] bg-white">
          <div className="ml-[31px] mt-[40px] h-[377px] w-[737pxpx]">
            <div className="mb-[90px] flex h-[50px] w-[737px] items-center justify-between rounded-[4px]">
              <div className="flex h-[50px] w-[235px] items-center bg-slate-100">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-[50px] w-[235px] bg-slate-100 px-4 text-xl"
                />
              </div>
              <div className="flex h-[50px] w-[235px] items-center bg-slate-100">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-[50px] w-[235px] bg-slate-100 px-4 text-xl"
                />
              </div>
              <div className="flex h-[50px] w-[235px] items-center bg-slate-100">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-[50px] w-[235px] bg-slate-100 px-4 text-xl"
                />
              </div>
            </div>
            {/* bottom */}

            <div className="h-[270px] w-[737px]">
              <textarea
                type="text"
                placeholder="Your Massage"
                className="h-[207px] w-[737px] bg-slate-100 text-xl"
              />

              <div className="ml-[522px] flex h-[56px] w-[215px] items-center justify-center rounded-[4px] bg-red-500">
                <button className="text-[16px] font-medium text-white">
                  Send Massage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
