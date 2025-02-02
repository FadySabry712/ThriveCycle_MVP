import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (!userInfo) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  });
  return (
    <div className="absolute text-white md:hidden flex items-center justify-between h-[80px] w-[100%] ">
      <h1 className="px-[20px] font-bold">RCM Health</h1>
      <button className="px-[20px]" onClick={() => setOpenMenu(!openMenu)}>
        <SlMenu />
      </button>
      <div
        className={`shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute transition-all ease-in-out ${
          openMenu ? "translate-y-[65px]" : "translate-y-[-300px]"
        } w-[100%] bg-[#21c78f] z-[999]`}
      >
        <ul className="flex flex-col gap-[10px] py-[10px] justify-center  items-center">
          <div className="flex justify-between mt-[35px] items-center w-[100%] ">
            <h1 className="px-[20px] font-bold">RCM Health</h1>
            <button
              className="px-[15px]  text-[30px]"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IoCloseSharp />
            </button>
          </div>
          <Link
            onClick={() => setOpenMenu(false)}
            to={"/"}
            className="mx-[24px] text-[16px] font-[300] hover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms]"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpenMenu(false)}
            to={"/about"}
            className="mx-[24px] text-[16px] font-[300] hover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms]"
          >
            About Us
          </Link>

          <Link
            onClick={() => setOpenMenu(false)}
            to={"/contact"}
            className="mx-[24px] text-[16px] font-[300] hover:translate-x-[-5px] transition-all ease-in-out duration-[400ms]"
          >
            Contact Us
          </Link>
          {!loginStatus && (
            <Link
              onClick={() => setOpenMenu(false)}
              to={"/login"}
              className="font-[300] text-[16px] hhover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms] cursor-pointer"
            >
              Login
            </Link>
          )}
          {loginStatus && (
            <Link
              onClick={() => setOpenMenu(false)}
              to={"/profile"}
              className="font-[300] text-[16px] hhover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms] cursor-pointer"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MobileNav;
