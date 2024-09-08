import { NavLink } from "react-router-dom";

export default function MyProfile() {
  return (
    // left side
    <div className="my-[80px] mr-[80px] flex gap-[100px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h2 className="ml-[135px] h-[24px] w-[166px]">Manage My Account</h2>
          <div className="ml-[170px] mt-3 flex h-[88px] w-[165px] flex-col gap-[8px]">
            <span>My Profile</span>
            <span>Address Book</span>
            <span>My Payment Option</span>
          </div>
        </div>

        <div className="flex flex-col">
          <NavLink to="/order">
            <h2 className="ml-[135px] h-[24px] w-[166px]">My Orders</h2>
          </NavLink>

          <div className="ml-[170px] mt-3 flex h-[70px] w-[165px] flex-col gap-[8px]">
            <span>My Return</span>
            <span>My cancellation</span>
          </div>
        </div>

        <div className="flex flex-col">
          <NavLink to="/wishlist">
            <h2 className="ml-[135px] h-[24px] w-[166px]">My WishList</h2>
          </NavLink>
        </div>
      </div>
      {/* right side */}
      <div className="h-[630px] w-[850px] shadow-md">
        <div className="mx-[50px] mt-[58px]">
          <div className="flex h-[82px] w-[710px] gap-[50px]">
            <div className="flex flex-col gap-[16px]">
              <label>First Name</label>
              <input type="text" className="h-[50px] w-[330px]" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <label>Last Name</label>
              <input type="text" className="h-[50px] w-[330px]" />
            </div>
          </div>

          <div className="flex h-[82px] w-[710px] gap-[50px]">
            <div className="flex flex-col gap-[16px]">
              <label>Email</label>
              <input type="email" className="h-[50px] w-[330px]" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <label>Address</label>
              <input type="text" className="h-[50px] w-[330px]" />
            </div>
          </div>

          <div className="flex h-[214px] w-[710px] gap-[16px]">
            <div className="flex flex-col gap-[16px]">
              <label>Save Password</label>

              <input
                type="password"
                placeholder="Current Password"
                className="h-[50px] w-[710px]"
              />
              <input
                type="password"
                placeholder="New Password"
                className="h-[50px] w-[710px]"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="h-[50px] w-[710px]"
              />
            </div>
          </div>
        </div>
        <div className="bg- flex h-[56px] w-[710px] justify-end gap-2">
          <button className="h-[56px] w-[56px]">Cancle</button>
          <button className="h-[56px] w-[214px] bg-red-500">Save Change</button>
        </div>
      </div>
    </div>
  );
}

MyProfile;
