import { PiArrowFatLineRightFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="flex text-white max-w-[100vw] overflow-hidden">
      <div className="bg-[#21c78f] md:w-[100%] p-[50px]">
        <h1 className="text-[30px] font-bold">Stay Informed</h1>
        <p>Keep up to date on our latest stories and blogs.</p>
      </div>
      <div className="bg-[#1d7b5c]  p-[50px] flex md:flex-row flex-col md:items-center md:justify-between">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
          placeholder="Email"
          className="bg-transparent text-white md:w-[100%] placeholder:text-white outline-none cursor-text mb-[20px] md:mb-0"
        />
        <button
          className="flex items-center"
          onClick={() => {
            if (!email.includes("@") || !email.includes(".com")) {
              toast.error("Please insert a correct email");
            } else {
              setEmail("");
              toast.success("You have been subscribed to our newsletter");
            }
          }}
        >
          <PiArrowFatLineRightFill className="mr-[10px] text-[25px] text-white" />{" "}
          <span className="font-[900] text-[20px]">SUBSCRIBE</span>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
