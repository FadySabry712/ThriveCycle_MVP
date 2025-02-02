import { useState } from "react";
import Payment from "../components/payment/Payment";
import profile from "../images/profile_icon.jpg";
import { TiTick } from "react-icons/ti";

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const [showPay, setShowPay] = useState(false);
  const [subscribtion, setSubscribtion] = useState("");
  console.log(userInfo);
  if (!userInfo) {
    return (
      <div className="profilebg w-[100vw] flex items-center justify-center">
        <p className="font-bold text-white text-[30px]">
          You are not logged in
        </p>
        ;
      </div>
    );
  } else
    return (
      <>
        <Payment
          hideVal={showPay}
          subscribtion={subscribtion}
          setShowPay={setShowPay}
        />
        <div className="profilebg w-[100vw] flex  justify-center">
          <div className="container mt-[120px] rounded-md">
            <div className=" bg-[#ffffff6c] shadow-xl relative rounded-md p-4 flex lg:flex-row flex-col items-center lg:items-start mb-[100px]">
              <div className="lg:border-r-[3px] border-[#ffffff] lg:pr-[50px]">
                <img
                  src={profile}
                  alt=""
                  className="w-[200px] bg-[#ffffff6c] rounded-md mb-[20px]"
                />

                <p>
                  <span className="font-bold text-white text-[20px] ">
                    Name:
                  </span>{" "}
                  <span className="text-white text-[18px]">
                    {userInfo.name}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-white text-[20px]">
                    Username:
                  </span>{" "}
                  <span className="text-white text-[18px]">
                    {" "}
                    {userInfo.username}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-white text-[20px]">
                    Subscribtion:
                  </span>{" "}
                  <span className="text-white text-[18px]">
                    {userInfo.subscribtion}
                  </span>
                </p>
                <button
                  className="bg-[#21c78f] mb-[50px] text-white w-[100%] mt-[40px] hover:scale-[101%] transition-all ease-in-out rounded-md p-2"
                  onClick={() => {
                    localStorage.removeItem("userData");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </div>
              <div className="lg:ml-[40px] w-[70%]">
                <div className="flex flex-col items-center w-[100%] lg:block">
                  <p className="font-bold text-white text-[25px] ">RC Score</p>
                  <p>
                    <span className="font-bold text-white text-[20px]">
                      Current RC score:
                    </span>{" "}
                    <span className="text-white text-[18px]">
                      {userInfo.rc_score}%
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-white text-[20px]">
                      Goal:
                    </span>{" "}
                    <span className="text-white text-[18px]">100%</span>
                  </p>
                </div>
                <div className="my-[70px] w-[100%] flex  lg:flex-row flex-col gap-[30px] lg:gap-0 justify-between items-center">
                  <div className="box bg-white relative rounded-md shadow-md p-[30px] hover:scale-[105%] w-fit xl:max-w-[30%] xl:h-[600px] transition-all ease-in-out cursor-pointer">
                    <h1 className="font-bold text-[30px] text-center mb-[30px]">
                      Silver
                    </h1>
                    <div className=" flex items-center justify-center w-[100%] relative ">
                      <p>Price $20</p>
                      <span className="absolute top-[0px] left-[130px] text-[13px] text-gray-500 ">
                        /month
                      </span>
                    </div>
                    <div className="mt-[30px]">
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Claim submission
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Elgibility and benefits
                        checks
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Payment posting
                      </p>
                    </div>
                    <button
                      className="bg-[#21c78f] text-white  mt-[40px]  hover:scale-[105%] w-[80%] left-[50%] translate-x-[-50%] absolute bottom-[10px] transition-all ease-in-out cursor-pointer rounded-md p-2"
                      onClick={() => {
                        setShowPay(true);
                        setSubscribtion("silver");
                      }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <div className="box bg-white relative rounded-md shadow-md p-[30px] hover:scale-[105%] w-fit xl:max-w-[30%] xl:h-[600px] transition-all ease-in-out cursor-pointer">
                    <h1 className="font-bold text-[30px] text-center mb-[30px]">
                      Gold
                    </h1>
                    <div className=" flex items-center justify-center w-[100%] relative ">
                      <p>Price $50</p>
                      <span className="absolute top-[0px] left-[130px] text-[13px] text-gray-500 ">
                        /month
                      </span>
                    </div>
                    <div className="mt-[30px]">
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Claims submission
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Eglibity and benefits
                        checks
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Denial and rejection
                        managment
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Claims follow ups and
                        appeals managment
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Payment posting
                      </p>
                    </div>
                    <button
                      className="bg-[#21c78f] w-[80%] left-[50%] translate-x-[-50%] absolute bottom-[10px] text-white mt-[40px] hover:scale-[105%] transition-all ease-in-out cursor-pointer rounded-md p-2"
                      onClick={() => {
                        setShowPay(true);
                        setSubscribtion("gold");
                      }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <div className="box bg-white relative rounded-md shadow-md p-[30px] hover:scale-[105%] w-fit xl:max-w-[30%] xl:h-[600px] transition-all ease-in-out cursor-pointer">
                    <h1 className="font-bold text-[30px] text-center mb-[30px]">
                      Platinum
                    </h1>
                    <div className=" flex items-center justify-center w-[100%] relative ">
                      <p>Price $80</p>
                      <span className="absolute top-[0px] left-[130px] text-[13px] text-gray-500 ">
                        /month
                      </span>
                    </div>
                    <div className="mt-[30px]">
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Claims submission
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> 10 eglibity and benefits
                        checks
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Denial and rejection
                        managment
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Claims follow ups and
                        appeals management
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Authorizations and
                        referrals managment
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Credentialling
                      </p>
                      <p className="flex text-[14px] items-start mb-[10px]">
                        <TiTick className="w-[20px]" /> Patient’s AR management
                      </p>
                      <p className="flex text-[14px] itemsstartr mb-[10px]">
                        <TiTick className="w-[20px]" /> Payment posting
                      </p>
                    </div>
                    <button
                      className="bg-[#21c78f] w-[80%] left-[50%] translate-x-[-50%] absolute bottom-[10px] text-white w-[100%] mt-[40px] hover:scale-[105%] transition-all ease-in-out cursor-pointer rounded-md p-2"
                      onClick={() => {
                        setShowPay(true);
                        setSubscribtion("platinum");
                      }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Profile;
