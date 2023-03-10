import React from "react";
import ErrorImage from "../images/404Error.gif";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex flex-col py-4  lg:h-screen justify-center items-center bg-white text-black ">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-5xl pt-3 font-semibold tracking-widest">404</p>
        <p className="tracking-widest text-center ">Look like you're lost in the Wilderness.</p>
        <p className="tracking-widest text-center">Some Pages are under Production Come back soon</p>
        <button className="rounded-lg text-white text-xs md:text-base font-light px-4 py-1.5 outline-none duration-500 bg-black hover:bg-gray-900" 
        onClick={()=> {
          navigate('/')
        }}>Take me to Home Page</button>
      </div>
      <div className="flex  justify-center items-center">
        <img src={ErrorImage} alt="" className="w-3/4" />
      </div>
    </div>
  );
};

export default PageNotFound;
