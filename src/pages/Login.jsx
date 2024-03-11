import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import loginBgImg from "../images/2a561d0d-cf71-4eec-9e32-e59a0a380072.JPG";

const Login = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginBgImg}
      />

      <div className="flex justify-center items-center h-full ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-2xl font-bold text-center py-4">RICHWAY GYM CENTER</h2>
          <div className="flex justify-between py-8">
            <p className="border text-white bg-violet-600 cursor-pointer px-6 py-2 relative flex items-center">
              <AiFillFacebook className="mr-2 text-white" /> Facebook
            </p>
            <p className="border bg-violet-600 cursor-pointer text-white px-6 py-2 relative flex items-center">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input className="border relative bg-gray-100 p-2" type="text" />
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input className="border relative bg-gray-100 p-2" type="password" />
          </div>

          <button className="w-full py-3 mt-8 bg-violet-600 hover:bg-violet-600 relative text-white">Sign In</button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;