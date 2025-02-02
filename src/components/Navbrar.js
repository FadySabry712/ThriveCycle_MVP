import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbrar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (!userInfo) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, []);
  return (
    <div className="hidden md:absolute text-white md:flex items-center justify-between h-[80px] container">
      {/* LOGO */}
      <Link
        to={"/"}
        className="font-bold text-[30px] hover:scale-105 transition-all ease-in-out  duration-[400ms] cursor-pointer"
      >
        RCM Health
      </Link>
      {/* Middle links bar */}
      <ul className="flex justify-between items-center">
        <Link
          to={"/"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out  duration-[400ms]"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out  duration-[400ms]"
        >
          About Us
        </Link>

        <Link
          to={"/contact"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out duration-[400ms]"
        >
          Contact Us
        </Link>
      </ul>
      {/* Right Side Link */}
      <ul>
        {!loginStatus && (
          <Link
            to={"/login"}
            className="font-[300] text-[16px] hhover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms] cursor-pointer"
          >
            Login
          </Link>
        )}
        {loginStatus && (
          <Link
            to={"/profile"}
            className="font-[300] text-[16px] hhover:translate-x-[-5px] transition-all ease-in-out  duration-[400ms] cursor-pointer"
          >
            Profile
          </Link>
        )}
      </ul>
    </div>
  );
};
export default Navbrar;
