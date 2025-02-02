import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { PiArrowFatLineRightFill } from "react-icons/pi";

import image1 from "../images/section2.jpeg";
import image3 from "../images/section3.jpeg";
import image4 from "../images/section4.jpeg";
import { act, useState } from "react";
import { section3data } from "../utils/data";
import hex from "../images/hexagon.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="homeBg w-[100vw]">
      {/* Hero Section */}
      <div className="h-[66.8vh] w-[100vw] md:ml-[100px] text-center container flex md:items-start items-center flex-col mt-[250px] text-white">
        <div className="pl-[30px]">
          <h1 className="text-[50px] font-bold leading-none mb-[20px]">
            Welcome to RCM <br></br>HealthCare
          </h1>
          <p className="text-[25px] text-center leading-tight ">
            Your trusted partner in optimizing your practice's medical billing
            and <br />
            streamlining your day-to-day operations.
          </p>
        </div>
        <button className="text-white absolute bottom-0 left-[50%] translate-x-[-50%] text-[35px] bouncing mb-[70px] md:mb-[20px]">
          <MdKeyboardDoubleArrowDown />
        </button>
      </div>
      {/*End Hero Section */}
      {/* Section 2 */}
      <section className="xl:flex  bg-gray-200  items-center mb-[100px] p-[100px] md:p-0">
        <img
          src={image1}
          className="max-w-[700px] max-h-[700px] hidden md:block"
          alt=""
        />
        <div className="md:ml-[50px]">
          <h1 className="text-[50px] font-bold leading-none mb-[20px] text-[#21c78f]">
            We Are RCM <br></br>Healthcare
          </h1>
          <p className="text-[18px]">
            RCM Healthcare is providing high-quality business process
            outsourcing services to physicians and practices of all
            specialities.
          </p>
        </div>
      </section>
      {/* End Section 2 */}
      {/* Section 3 */}
      <section className=" flex flex-col items-center pb-[150px] ">
        <div className="container">
          <h1 className="text-[50px] text-center font-bold leading-none mb-[20px] text-[#21c78f]">
            {" "}
            Transform your <br /> practice with our <br /> top-tier services
          </h1>
          <div className="flex justify-between font-bold text-[18px] pt-[30px]">
            <button
              onClick={() => {
                setActive(1);
              }}
              className={`border-b-[3px] w-[100%] text-[12px] md:text-[18px] hover:text-[#21c78f] hover:border-b-[#21c78f] ${
                active === 1 && "text-[#21c78f] border-b-[#21c78f]"
              }`}
            >
              Medical Billing Services
            </button>
            <button
              onClick={() => {
                setActive(2);
              }}
              className={`border-b-[3px] w-[100%] text-[12px] md:text-[18px] hover:text-[#21c78f] hover:border-b-[#21c78f] ${
                active === 2 && "text-[#21c78f] border-b-[#21c78f]"
              }`}
            >
              Credentialing Services
            </button>
            <button
              onClick={() => {
                setActive(3);
              }}
              className={`border-b-[3px] w-[100%] text-[12px] md:text-[18px] hover:text-[#21c78f] hover:border-b-[#21c78f] ${
                active === 3 && "text-[#21c78f] border-b-[#21c78f]"
              }`}
            >
              Pre-Authorization Services
            </button>
            <button
              onClick={() => {
                setActive(4);
              }}
              className={`border-b-[3px] w-[100%] text-[12px] md:text-[18px] hover:text-[#21c78f] hover:border-b-[#21c78f] ${
                active === 4 && "text-[#21c78f] border-b-[#21c78f]"
              }`}
            >
              Front Office Services
            </button>
          </div>
          <div className="mt-[50px] flex md:flex-row flex-col">
            <img
              src={image3}
              alt=""
              className=" rounded-r-lg md:max-w-[500px] max-w-[200px] mr-[90px]"
            />
            <div>
              <h1 className="md:text-[18px] text-[15px]  font-bold ">
                {active === 1 && "Medical Billing Services"}
                {active === 2 && "Credentialing Services"}
                {active === 3 && "Pre-Authorization Services"}
                {active === 4 && "Front Office Services"}
              </h1>
              <p className="md:text-[18px] text-[15px] mb-[20px]">
                {active === 1 &&
                  "Secure your practice’s financial position with RCM Healthcare’s comprehensive medical billing services"}
                {active === 2 &&
                  "When you outsource your credentialing/recredentialing needs to RCM Healthcare’s team of experts, you’ll be able to:"}
                {active === 3 &&
                  "We know that specific medical procedures require approval from your patients’ insurance companies before they can receive them. And to that end,"}
                {active === 4 &&
                  "RCM Healthcare’s front-office services entail handling and managing all of the following:"}
              </p>
              <ul className="text-black list-disc marker:text-[#21c78f] ">
                {active === 1 &&
                  section3data.section1.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="my-[10px] text-[15px] md:text-[18px]"
                      >
                        {item}
                      </li>
                    );
                  })}
                {active === 2 &&
                  section3data.section2.map((item) => {
                    return (
                      <li className="my-[10px] text-[15px] md:text-[18px]">
                        {item}
                      </li>
                    );
                  })}
                {active === 3 &&
                  section3data.section3.map((item) => {
                    return (
                      <li className="my-[10px] text-[15px] md:text-[18px]">
                        {item}
                      </li>
                    );
                  })}
                {active === 4 &&
                  section3data.section4.map((item) => {
                    return (
                      <li className="my-[10px] text-[15px] md:text-[18px]">
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="bg-grad flex flex-col items-center py-[100px]">
        <div className="container items-center flex flex-col xl:flex-row w-[100%] justify-between">
          <h1 className="text-[35px] text-left font-bold leading-none mb-[20px]  text-white">
            We know what it <br /> takes to boost your <br />
            bottom line, and <br /> we have the <br /> numbers to prove it.
          </h1>
          <div className="flex flex-wrap xl:flex-nowrap md:justify-between  relative w-[60%]">
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-bold leading-none">
                30 Days in <br /> A/R (Goal)
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] font-bold leading-none">
                15 Days to <br /> receive <br /> payments
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] text-center translate-x-[-50%] font-bold leading-none">
                99% Clean <br /> Claim Submission
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] font-bold leading-none">
                30% Revenue increase with clean claims submission
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="flex xl:flex-row flex-col    items-center mb-[100px]">
        <img
          src={image4}
          className="md:max-w-[700px] md:max-h-[700px] max-w-[100%]"
          alt=""
        />
        <div className="ml-[50px]">
          <h1 className="text-[50px] font-bold leading-none mb-[20px] pt-[80px] md:pt-0 text-[#21c78f]">
            Why Choose RCM <br></br>Healthcare
          </h1>
          <p className="md:text-[18px] text-[15px] mb-[20px]">
            RCM Healthcare has been providing medical billing, credentialing,
            pre-authorization, and front-office management services to
            physicians. We’re experts in our field, and our team is passionate
            about helping doctors
          </p>
          <p className="md:text-[18px] text-[15px]">
            Our goal is to provide you with the support you need so you can
            focus on what you do best: caring for your patients.
          </p>
          <p className="md:text-[18px] text-[15px] mt-[20px]">
            Contact us today to learn more about how we can help improve your
            practice’s operations and increase your revenue.
          </p>
          <Link className="flex mt-[20px] items-center" to={"/contact"}>
            <PiArrowFatLineRightFill className="mr-[10px] text-[20px] text-[#21c78f]" />{" "}
            <span className="font-bold">Contact Us</span>
          </Link>
        </div>
      </section>
      {/* Section 6 */}
      <section className="flex flex-col items-center ">
        <div className="container">
          <h1 className="font-bold text-[35px] mb-[33px] text-center">
            Discover the possibilities that lie ahead of you
          </h1>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px] ">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Evaluation
              </h1>
              <p>
                We understand that every practice has unique needs and
                challenges. That’s why we take the time to sit down with you and
                assess your practice’s current standing in order to develop a
                customized plan tailored to your needs.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Planning
              </h1>
              <p>
                Our experienced teams are ready to take the reins and bring your
                strategy into play. We work with your existing systems to craft
                solutions and deliver the best results.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Execution
              </h1>
              <p>
                We help you stay on top of the ever-changing healthcare
                landscape and ensure your strategies are implemented efficiently
                to boost your practice’s bottom line.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Support
              </h1>
              <p>
                We provide the necessary tools and offer ongoing support to
                ensure everything stays on track. We troubleshoot problems and
                make adjustments as required to accommodate your changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pb-[100px]">
        <div className="container mt-[120px] flex md:flex-row justify-between">
          <div>
            <h1 className="text-[#21c78f] text-[50px] font-bold">Start Now</h1>
            <p className="text-[18px]">
              To operate more efficiently and maximize <br /> your revenue
              potentially
            </p>
          </div>
          <Link className="flex mt-[20px] items-center" to={"/contact"}>
            <PiArrowFatLineRightFill className="mr-[10px] text-[60px] text-[#21c78f]" />{" "}
            <span className="font-[900] text-[50px]">Contact Us</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
