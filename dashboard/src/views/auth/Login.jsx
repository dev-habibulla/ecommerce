import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className=" min-w-screen min-h-screen	bg-mainColor flex justify-center items-center">
      <div className=" w-[350px] p-2">
        <div className=" bg-white p-4 rounded-md">
          <h2 className=" text-xl mb-3 font-bold">Welcome to OfferPoka</h2>
          <p className=" text-sm mb-3 font-medium">Please login your account</p>

          <form onSubmit={handleFormSubmit}>
            <div className=" flex flex-col w-full gap-1 mb-3">
              <label className=" text-sm" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleInputChange}
                className=" px-3 py-2 outline-none border border-slate-200 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className=" flex flex-col w-full gap-1 mb-3">
              <label className=" text-sm" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleInputChange}
                className=" px-3 py-2 outline-none border border-slate-200 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <button className=" bg-mainColor w-full hover:bg-mainHover text-white mb-3 px-7 py-2 rounded-md">
              Sing In
            </button>

            <div className=" flex items-center mb-3 gap-3 justify-center">
              <p className=" text-sm">
                Don't Have an Account?{" "}
                <Link className=" font-bold" to="/registration">
                  Sing Up
                </Link>
              </p>
            </div>
          </form>

          <div className=" w-full flex justify-center items-center mb-3">
            <div className=" w-[45%] bg-slate-200 h-[1px]"></div>
            <div className=" w-[10%] flex justify-center items-center">
              <span>Or</span>
            </div>
            <div className=" w-[45%] bg-slate-200 h-[1px]"></div>
          </div>

          <div className=" flex justify-center items-center gap-3">
            <div className=" w-[135px] h-[35px] flex justify-center items-center rounded-md text-white bg-red-500 hover:bg-red-400 cursor-pointer overflow-hidden">
              <span>
                <FaGoogle />
              </span>
            </div>

            <div className=" w-[135px] h-[35px] flex justify-center items-center rounded-md  text-white bg-blue-500 hover:bg-blue-400 cursor-pointer overflow-hidden">
              <span>
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
