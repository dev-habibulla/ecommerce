import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { admin_login, clearMessage } from "../../store/reducers/authReducer";
import {ClipLoader} from "react-spinners";
import toast from 'react-hot-toast';


const AdminLogin = () => {

  let dispatch=useDispatch()
  let {loader,errorMessage,successMessage}=useSelector(state=>state.auth)

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
    dispatch(admin_login(data))
  };

  useEffect(() => {
   
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(clearMessage)
    }

  }, [errorMessage])
  
  useEffect(() => {
   
    if(successMessage){
      toast.success(successMessage)
      dispatch(clearMessage)
    }

  }, [successMessage])

  return (
    <div className=" min-w-screen min-h-screen	bg-mainColor flex justify-center items-center">
      <div className=" w-[350px] p-2">
        <div className=" bg-white p-4 rounded-md">
    <div className=" h-[70px] flex items-center justify-center">
    <div className=" w-[180px] h-[50px]  flex items-center justify-center">
    <img src="/Ocommerce.png" alt="logo" />
    </div>
    </div>

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

            <button disabled={loader ? true :false} className=" disabled:bg-slate-400 bg-mainColor w-full hover:bg-mainHover text-white mb-3 px-7 py-2 rounded-md">
              
              {loader ? <ClipLoader size={25} color="#fff" />:"Login"}
             
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AdminLogin;
