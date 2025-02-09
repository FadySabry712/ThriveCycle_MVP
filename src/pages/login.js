import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Client, Account, ID } from "appwrite"; 

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("679a7ba9003a3a44fa30"); 

const account = new Account(client);

const Login = () => {
    const navigate = useNavigate();
    const [registered, setRegistered] = useState(true);
    const [loginInfo, setLoginInfo] = useState({
        name: "",
        email: "", 
        password: "",
    });

    const userInfo = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        if (userInfo) {
            navigate("/profile");
        }
    }, []);

    const register = async () => {
        try {
            const response = await account.create(
                ID.unique(), 
                loginInfo.email, 
                loginInfo.password,
                loginInfo.name
            );

            toast.success("You Have Been Registered");
            setRegistered(true);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const login = async () => {
        try {
            await account.createEmailSession(loginInfo.email, loginInfo.password); 

            const user = await account.get();
            localStorage.setItem("userData", JSON.stringify(user));

            toast.success("Login Successful");
            navigate("/profile");
        } catch (error) {
            toast.error("Incorrect email or password.");
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
                        value={loginInfo.email} 
                        onChange={(e) =>
                            setLoginInfo({ ...loginInfo, email: e.target.value })
                        }
                        type="email" 
                        placeholder="Email"
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
                            onClick={login}
                            className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
                        >
                            Login
                        </button>
                    )}
                    {!registered && (
                        <button
                            onClick={register}
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
