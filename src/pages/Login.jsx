export function Login() {
  return (
    <div className="">
      <div className="mb-36 mt-16 flex gap-4">
        <div className="h-[781px] w-[805px] border bg-slate-400">
          <img
            src="signup.jpg"
            alt="signup"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="m-20 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="font-body text-4xl font-medium">
              Login in to Exclusive
            </h1>
            <p className="font-display">Enter your details below</p>
          </div>
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b-1"
            />
            <input type="text" placeholder="Password" className="border-b-1" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <button className="rounded-sm bg-red-600 px-12 py-4 font-display font-medium text-white">
                Log in
              </button>
              <a className="font-display text-red-600" href="#">
                Forget Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
