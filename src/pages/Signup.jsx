import { Link } from "react-router-dom";

export function Singup() {
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
              Create an account
            </h1>
            <p className="font-display">Enter your details below</p>
          </div>
          <div className="flex flex-col gap-10">
            <input type="text" placeholder="Name" className="border-b-1" />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b-1"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center rounded-sm bg-red-600 py-4 font-display font-medium text-white">
              Create Account
            </button>
            <div className="flex flex-col">
              <button className="flex items-center justify-center gap-4 border px-20 py-2">
                <i className="fa-brands fa-google"></i>
                <span>Sign up with Google</span>
              </button>
              <p className="mt-8 flex items-center justify-center gap-2">
                Already have account?{" "}
                <Link to="/login" className="font-medium underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
