import { Client, Account, ID } from "appwrite"; 
import { createDocument } from '../lib/appwrite_with_document'; 
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const client = new Client();
client
  .setEndpoint(process.env.REACT_APP_API_URL) // Ensure correct env variable
  .setProject("YOUR_PROJECT_ID");

const account = new Account(client);

const Login = () => {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(true);
  const [loginInfo, setLoginInfo] = useState({ name: "", username: "", password: "" });

  useEffect(() => {
    const userInfo = localStorage.getItem("userData");
    if (userInfo) {
      navigate("/profile");
    }
  }, []);

  const register = async () => {
    const intiger = Math.floor(Math.random() * 100); 
    try {
      console.log("Registering with data:", { name: loginInfo.name, username: loginInfo.username });

      const response = await createDocument({ 
          user_id: intiger, 
          user_name: loginInfo.username, 
          name: loginInfo.name 
      });

      console.log(response);
      toast.success("You Have Been Registered");
      setLoginInfo({ name: "", username: "", password: "" });
      setRegistered(true);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred during registration.");
    }
  };

  const login = async () => {
    try {
      const response = await account.createEmailSession(loginInfo.username, loginInfo.password);
      localStorage.setItem("userData", JSON.stringify(response));
      toast.success("You Have Been Logged In");
      window.location.reload();
    } catch (error) {
      console.error(error);
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
              onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
              type="text"
              placeholder="Name"
              className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-neutral-40 pb-[7px] w-[100%]"
            />
          )}
          <input
            value={loginInfo.username}
            onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
            type="text"
            placeholder="Username"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-neutral-40 pb-[7px] w-[100%]"
          />
          <input
            value={loginInfo.password}
            onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-neutral-400 pb-[7px] w-[100%]"
          />
          {registered ? (
            <button
              onClick={login}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Login
            </button>
          ) : (
            <button
              onClick={register}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Register
            </button>
          )}
          <p
            className="text-white text-[16px]"
            onClick={() => setRegistered(!registered)}
          >
            {registered ? "New user? " : "Existing user? "}
            <span className="underline cursor-pointer">{registered ? "Sign Up" : "Sign In"}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
