
import { Client, Account, ID } from "appwrite"; // Import necessary Appwrite components
import { createDocument } from '../lib/appwrite_with_document'; // Import createDocument function
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const client = new Client();
const account = new Account(client);

const Login = () => {
  const API_URL = process.env.API_URL;
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    username: "",
    password: "",
  });
  const userInfo = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (!userInfo) {
      return;
    } else {
      navigate("/profile");
    }
  }, []);

  const register = async () => {
    const number = Math.random();
    const intiger = Math.floor(number * 100); // Ensure it's a valid integer

    const percentage = intiger.toString().substring(0, 4);
    try {
      console.log("Registering with data:", { name: loginInfo.name, username: loginInfo.username, password: loginInfo.password, rc_score: percentage });

const response = await createDocument({ 
    user_id: intiger, 
    user_name: loginInfo.username, 
    password: loginInfo.password, 
    name: loginInfo.name 
});




      console.log(response);
      toast.success("You Have Been Registered");
      setLoginInfo({
        name: "",
        username: "",
        password: "",
      });
      setRegistered(true);
      return;
    } catch (error) {
      const errorMessage = error.response && error.response.data ? error.response.data.message : "An error occurred during registration.";

      toast.error(errorMessage);
    }
  };

  const login = async () => {
    try {
      const response = await account.createEmailSession(loginInfo.username, loginInfo.password);
      localStorage.setItem("userData", JSON.stringify(response));
      toast.success("You Have Been Logged");
      window.location.reload();
      setRegistered(true);
      return;
    } catch (error) {
      toast.error("Incorrect username or password.");
    }
  };

  return (
    <section className="flex w-[100vw] flex-col">
      <div className="contactbg flex flex-col items-center">
        <div className="absolute top-[50%] left-[50%] lg:w-[30%] w-[80%] translate-x-[-50%] flex flex-col gap-[30px] translate-y-[-50%] p-[50px] rounded-md bg-[#ffffff6c]">
          {!registered && (
            <input
              value={loginInfo.name}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, name: e.target.value })
              }
              type="text"
              placeholder="Name"
              className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-40 pb-[7px] w-[100%]"
            />
          )}
          <input
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
            type="text"
            placeholder="Username"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-40 pb-[7px] w-[100%]"
          />
          <input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-400 pb-[7px] w-[100%]"
          />
          {registered && (
            <button
              onClick={() => login()}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Login
            </button>
          )}
          {!registered && (
            <button
              onClick={() => register()}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Register
            </button>
          )}
          {registered && (
            <p
              className="text-white text-[16px]"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              New user?<span className="underline cursor-pointer">Sign Up</span>
            </p>
          )}
          {!registered && (
            <p
              className="text-white text-[16px]"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              Existing User?{" "}
              <span className="underline cursor-pointer">Sign in</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
