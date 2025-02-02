import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import axios from "axios";
import { toast } from "react-toastify";
const Payment = ({ hideVal, subscribtion, setShowPay }) => {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiration: "",
    cvv: "",
    name: "",
  });
  console.log(typeof cardInfo.name);
  const subscribe = async () => {
    if (cardInfo.number.length !== 16) {
      toast.error("Please insert a valid card number");
      return;
    } else if (cardInfo.expiration.length !== 5) {
      toast.error("Invalid expiration date");
      return;
    } else if (cardInfo.cvv.length !== 3) {
      toast.error("Please insert a correct CVV");
      return;
    } else if (cardInfo.name.length < 5 || typeof cardInfo.name !== "string") {
      toast.error("Please insert a correct full name");
      return;
    } else {
      try {
        const { data } = await axios({
          method: "put",
          url: "https://backend-production-1f9e.up.railway.app/subscribtion",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
          },
          data: JSON.stringify({
            username: userInfo.username,
            subscribtion: subscribtion,
            creditCard: cardInfo.number,
          }),
        });
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userInfo, subscribtion: subscribtion })
        );
        toast.success(
          "You have been subscribed to" + " " + subscribtion + " " + "package"
        );
        setShowPay(!hideVal);
        window.location.reload();
        return;
      } catch (error) {
        toast.error("Subscribtion Failed, Please try again.");
      }
    }
  };
  return (
    <div
      className={`w-[100%] h-[100%] bg-[#000000a0] absolute ${
        !hideVal && "hidden"
      }  z-[9999]`}
    >
      <div class="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-lg overflow-hidden absolute left-[50%]  translate-x-[-50%] top-[40%] translate-y-[-50%]  ">
        <div class="px-6 py-4 bg-gray-900 text-white flex justify-between">
          <h1 class="text-lg font-bold">Credit Card</h1>{" "}
          <button className="text-[23px]" onClick={() => setShowPay(false)}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div class="px-6 py-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="card-number">
              Card Number
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              value={cardInfo.number}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, number: e.target.value })
              }
              maxLength={16}
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 font-bold mb-2"
              for="expiration-date"
            >
              Expiration Date
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiration-date"
              type="text"
              maxLength={5}
              value={cardInfo.expiration}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, expiration: e.target.value })
              }
              placeholder="MM/YY"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
              CVV
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              maxLength={3}
              value={cardInfo.cvv}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, cvv: e.target.value })
              }
              type="text"
              placeholder="***"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
              Cardholder Name
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={cardInfo.name}
              onChange={(e) =>
                setCardInfo({ ...cardInfo, name: e.target.value })
              }
              placeholder="Full Name"
            />
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              subscribe();
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
