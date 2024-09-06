export function Footer() {
  return (
    <div className="h-auto border bg-black">
      <div className="mx-20 my-10 flex h-[236px] w-[1170px] gap-8 text-white">
        <div>
          <h1 className="font-body text-2xl font-bold">Exclusive</h1>
          <p className="mt-6 font-display text-xl font-medium">Subscribe</p>
          <p className="mt-6 font-display">Get 10% off your first order</p>
          <div className="relative">
            <input
              className="mt-8 rounded-sm border-2 border-white bg-black p-3 font-display text-base"
              type="text"
              placeholder="Enter your email"
            />
            <i className="fa-solid fa-share-nodes absolute right-4 top-12"></i>
          </div>
        </div>
        <div>
          <h1 className="font-display text-xl font-medium">Support</h1>
          <div className="mt-6 flex flex-col gap-4 font-display">
            <p>Bangalore, Karnataka</p>
            <p>exclusive@gmail.com</p>
            <p>+123456789</p>
          </div>
        </div>
        <div>
          <h1 className="font-display text-xl font-medium">Account</h1>
          <div className="mt-6 flex flex-col gap-4 font-display">
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        <div>
          <h1 className="font-display text-xl font-medium">Quick Link</h1>
          <div className="mt-6 flex flex-col gap-4 font-display">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h1 className="font-display text-xl font-medium">Download App</h1>
          <p className="mt-6 font-display text-xs font-medium">
            Save $3 with App New User Only
          </p>
          <div className="mt-2 flex gap-2">
            <div className="h-20 w-20">
              <img src="qr.jpg" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="h-10 w-28">
                <img src="google.png" className="h-full w-full object-cover" />
              </div>
              <div className="h-10 w-28">
                <img src="apple.png" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <i className="fa-brands fa-facebook-f text-2xl"></i>
            <i className="fa-brands fa-twitter text-2xl"></i>
            <i className="fa-brands fa-instagram text-2xl"></i>
            <i className="fa-brands fa-linkedin-in text-2xl"></i>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t border-gray-500 p-4 text-white">
        Copyright 2024. All right reserved
      </div>
    </div>
  );
}
